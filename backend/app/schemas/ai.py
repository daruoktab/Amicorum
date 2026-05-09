from pydantic import BaseModel

class SentimentResult(BaseModel):
    sentiment: str  # POSITIVE, NEGATIVE, NEUTRAL
    score: float    # 0.0 to 1.0
    explanation: str

class ComplaintCategory(BaseModel):
    category: str   # Kualitas Makanan, Kebersihan, Pengiriman, Lainnya
    urgency: str    # LOW, MEDIUM, HIGH
    summary: str
