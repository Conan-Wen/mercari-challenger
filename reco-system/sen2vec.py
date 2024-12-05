from sklearn.feature_extraction.text import TfidfVectorizer
from sentence_transformers import SentenceTransformer
import numpy as np

def extract_keywords_tfidf_and_vectorize(text, vector_model, top_n=10):
    """
    TF-IDFを使用してキーワードを抽出し、それをベクトルに変換する。

    Args:
        text (str): 入力文章
        vector_model (SentenceTransformer): ベクトル変換モデル
        top_n (int): 抽出するキーワードの数

    Returns:
        dict: キーワードとそのベクトルの辞書
    """
    # TF-IDFによる特徴量抽出
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform([text])
    feature_names = vectorizer.get_feature_names_out()
    scores = tfidf_matrix.toarray()[0]

    # スコアが高い順にキーワードを選択
    top_indices = np.argsort(scores)[::-1][:top_n]
    keywords = [feature_names[i] for i in top_indices]

    # キーワードをベクトルに変換
    vectors = vector_model.encode(keywords)

    # キーワードとベクトルの対応関係を辞書にして返す
    return {keyword: vector for keyword, vector in zip(keywords, vectors)}


# モデルの初期化
vector_model = SentenceTransformer("all-MiniLM-L6-v2")

# 入力文章
text1 = f"""勤務までの流れ
お仕事にマッチング: 募集内容に合った店舗での業務が割り当てられる。
事前準備: マッチングした店舗で腸内検査キットを受け取る。
店舗で業務開始: 検査キットを店舗に持参し、勤務をスタートする。
写真撮影: 指示に従い検査キットの写真を撮影する。
勤務継続: 検査提出不要な期間内でマクドナルドの業務に従事可能。
具体的な業務
マクドナルドの店舗で接客業務や簡単な作業。
店舗到着時、「メルカリ ハロで応募した○○です」と声をかける。
検査キット提出が必要な場合は、指定手順で対応。
持ち物
靴: 動きやすい靴（サンダルやヒールはNG）。
服装: Tシャツ（制服のインナーとなるもの）、黒または茶のズボン（ジャージ不可）。
検査キット: 腸内検査キット、またはそれに対応する書類や写真。
勤務条件
遅刻厳禁（10分前到着必須）。
勤務中は清潔感のある服装と身だしなみ（髪色自由、メイク/装飾品制限あり）。
マスク着用は自由（色は白で指定）。
注意事項
災害など不可抗力による業務キャンセルの可能性。
勤務時に必要な検査キットを忘れると勤務できない。"""

# TF-IDFによるキーワード抽出とベクトル化の実行
result = extract_keywords_tfidf_and_vectorize(text1, vector_model)

# 結果の表示
for keyword, vector in result.items():
    print(f"キーワード: {keyword}")
    # print(f"ベクトル: {vector}\n")
