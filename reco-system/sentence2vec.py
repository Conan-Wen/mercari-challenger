from keybert import KeyBERT
from sentence_transformers import SentenceTransformer


def extract_keywords_and_vectorize(text, keyword_model, vector_model, top_n=5):
    """
    キーワードを抽出し、それをベクトルに変換する。

    Args:
        text (str): 入力文章
        keyword_model (KeyBERT): キーワード抽出モデル
        vector_model (SentenceTransformer): ベクトル変換モデル
        top_n (int): 抽出するキーワードの数

    Returns:
        dict: キーワードとそのベクトルの辞書
    """
    # キーワードを抽出
    keywords = [kw[0] for kw in keyword_model.extract_keywords(text, top_n=top_n)]

    # キーワードをベクトルに変換
    vectors = vector_model.encode(keywords)

    # キーワードとベクトルの対応関係を辞書にして返す
    return {keyword: vector for keyword, vector in zip(keywords, vectors)}


# モデルの初期化
keyword_model = KeyBERT("distilbert-base-nli-mean-tokens")
vector_model = SentenceTransformer("all-MiniLM-L6-v2")

# 入力文章
text = "人工知能（AI）は、近年急速に進化しており、さまざまな産業でその利用が進んでいます。特に機械学習やディープラーニングの技術が注目されています。"

# キーワード抽出とベクトル化の実行
result = extract_keywords_and_vectorize(text, keyword_model, vector_model)

# 結果の表示
for keyword, vector in result.items():
    print(f"キーワード: {keyword}")
    print(f"ベクトル: {vector}\n")
