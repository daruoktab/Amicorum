from fastapi import APIRouter
from app.api.v1.endpoints import ai

api_router = APIRouter()
api_router.include_router(ai.router, prefix="/ai", tags=["AI Engine"])
# Nanti tambahkan router blockchain di sini
# api_router.include_router(blockchain.router, prefix="/blockchain", tags=["Blockchain"])
