from fastapi import APIRouter, HTTPException
from app.services.ai_service import AIService
from app.schemas.ai import SentimentResult, ComplaintCategory

router = APIRouter()
ai_service = AIService()

@router.post("/analyze-sentiment", response_model=SentimentResult)
async def analyze_sentiment(text: str):
    try:
        return await ai_service.analyze_sentiment(text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/classify-complaint", response_model=ComplaintCategory)
async def classify_complaint(text: str):
    try:
        return await ai_service.classify_complaint(text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/detect-buzzer")
async def detect_buzzer(text: str):
    try:
        return await ai_service.detect_buzzer(text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
