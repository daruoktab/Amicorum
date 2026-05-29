from pydantic import BaseModel


class NotarizeResponse(BaseModel):
    status: str  # "success", "pending"
    pdf_hash: str
    transaction_hash: str | None = None


class VerifyResponse(BaseModel):
    is_valid: bool
    pdf_hash: str
    stored_hash: str | None = None
    message: str
