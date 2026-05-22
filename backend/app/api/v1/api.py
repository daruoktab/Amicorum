from fastapi import APIRouter
from app.api.v1.endpoints import ai, blockchain, hashing

api_router = APIRouter()
api_router.include_router(ai.router, prefix="/ai", tags=["AI Engine"])
api_router.include_router(blockchain.router, prefix="/blockchain", tags=["Blockchain"])
api_router.include_router(hashing.router, prefix="/hashing", tags=["Hashing"])
