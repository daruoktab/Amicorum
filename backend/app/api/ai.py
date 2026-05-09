from fastapi import APIRouter, HTTPException
from app.services.ai_service import AIService, SentimentResult, ComplaintCategory

router = APIRouter(prefix="/ai", tags=["AI Engine"])
ai_service = AIService()

@router.post("/analyze-sentiment", response_model=SentimentResult)
async def analyze_sentiment(text: str):
    try:
        result = await ai_service.analyze_sentiment(text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/classify-complaint", response_model=ComplaintCategory)
async def classify_complaint(text: str):
    try:
        result = await ai_service.classify_complaint(text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/detect-buzzer")
async def detect_buzzer(text: str):
    try:
        result = await ai_service.detect_buzzer(text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
