from pydantic import BaseModel


class HashResponse(BaseModel):
    pdf_hash: str
    algorithm: str = "SHA-256"


class VerifyHashRequest(BaseModel):
    pdf_hash: str


class VerifyHashResponse(BaseModel):
    is_valid: bool
    provided_hash: str
    calculated_hash: str
