from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from gensim.models import Word2Vec
from sklearn.feature_extraction.text import TfidfVectorizer
from typing import List

def cosine_similarity(v1: List[float], v2: List[float]) -> float:
    # 2つのベクトルのコサイン類似度を計算する
    dot_product = sum([x * y for x, y in zip(v1, v2)])
    magnitude_v1 = sum([x ** 2 for x in v1]) ** 0.5
    magnitude_v2 = sum([x ** 2 for x in v2]) ** 0.5
    return dot_product / (magnitude_v1 * magnitude_v2)

def item_id_to_vector(user_id: int) -> List[float]:
    

# リコメンドアルゴリズムのダミー関数
def recommend_jobs(item_id, num_recommendations: int) -> List[str]:
    # 実際のアルゴリズムをここに実装
    # 例えば、ユーザーIDに基づいてリコメンドする処理
    # 今回はダミーのジョブタイトルを返す
    recommended_jobs = [f"Job {i} for user {user_id}" for i in range(1, num_recommendations + 1)]
    df = pd.read_csv('data.csv')
    return recommended_jobs


# FastAPIアプリケーションのインスタンスを作成
app = FastAPI()


# リクエストボディの構造を定義するPydanticモデル
class RecommendRequest(BaseModel):
    user_id: int
    num_recommendations: int


# 推論エンドポイント
@app.post("/recommend")
async def get_recommendations(request: RecommendRequest):
    # リコメンドアルゴリズムを呼び出す
    recommendations = recommend_jobs(request.user_id, request.num_recommendations)
    return {"recommended_jobs": recommendations}


# サーバー起動（コマンドラインで以下のコマンドを実行）
# uvicorn filename:app --reload
