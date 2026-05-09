from google import genai
from typing import cast
import json
from app.core.config import settings
from app.schemas.ai import SentimentResult, ComplaintCategory

class AIService:
    def __init__(self):
        self.client = genai.Client(api_key=settings.GOOGLE_API_KEY)
        self.model_name = "gemini-3-flash-preview"

    async def analyze_sentiment(self, text: str) -> SentimentResult:
        prompt = f"""
        Analisis sentimen dari teks berikut:
        "{text}"
        
        Berikan output dalam format JSON sesuai schema.
        """
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=prompt,
            config={
                'response_mime_type': 'application/json',
                'response_schema': SentimentResult
            }
        )
        if response.parsed:
            return cast(SentimentResult, response.parsed)
        raise ValueError("Gagal mendapatkan output terstruktur dari AI")

    async def classify_complaint(self, text: str) -> ComplaintCategory:
        prompt = f"""
        Klasifikasikan laporan pengaduan berikut:
        "{text}"
        
        Berikan output dalam format JSON sesuai schema.
        """
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=prompt,
            config={
                'response_mime_type': 'application/json',
                'response_schema': ComplaintCategory
            }
        )
        if response.parsed:
            return cast(ComplaintCategory, response.parsed)
        raise ValueError("Gagal mendapatkan output terstruktur dari AI")

    async def detect_buzzer(self, text: str) -> dict:
        prompt = f"""
        Analisis ciri-ciri buzzer/bot:
        "{text}"
        """
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=prompt,
            config={'response_mime_type': 'application/json'}
        )
        return json.loads(response.text) if response.text else {"error": "No response"}
