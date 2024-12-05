from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# サンプル文章
text1 = f"""マクドナルドクルー経験者限定
【サンシャインシティALTA店
店】接客・商品注文受付や調理を行うキッチンのお仕事♪
飲食・フード（ファーストフード）/スタッフ
"""
# text2 = f"""
# 『即戦力求む！』マクドナルドクルー経験者限定【マクドナルド 神保町店】フロントカウンターエリアのお仕事♪
# 飲食・フード（ファーストフード）/スタッフ
# """
text2 = f"""【経験者限定】 ファミマで楽しく働いてみませんか？
販売・接客・サービス （コンビニ） /スタッフ
"""

text2 = f"""【ロピア】 ※スーパーレジ経験者の方限定！食品スーパーでのレジスタッフ募集！
販売・接客・サービス（スーパー）/スタッフ
"""

# Sentence Transformerモデルでベクトル化
model = SentenceTransformer("all-MiniLM-L6-v2")
vec1 = model.encode(text1)
vec2 = model.encode(text2)

# コサイン類似度を計算
similarity = cosine_similarity([vec1], [vec2])
print(f"センテンス埋め込みのコサイン類似度: {similarity[0][0]}")
