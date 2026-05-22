from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.hashing_service import HashingService
from app.schemas.hashing import HashResponse, VerifyHashResponse

router = APIRouter()

@router.post("/calculate", response_model=HashResponse)
async def calculate_hash(file: UploadFile = File(...)):
    """Hitung hash SHA-256 dari file PDF yang di-upload."""
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Hanya file PDF yang didukung")

    content = await file.read()
    pdf_hash = HashingService.calculate_pdf_hash(content)
    return HashResponse(pdf_hash=pdf_hash)


@router.post("/verify", response_model=VerifyHashResponse)
async def verify_hash(file: UploadFile = File(...), expected_hash: str = ""):
    """
    Verifikasi apakah hash file PDF cocok dengan hash yang diberikan.
    Gunakan query parameter `?expected_hash=...` atau kirim via form.
    """
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Hanya file PDF yang didukung")

    if not expected_hash:
        raise HTTPException(status_code=400, detail="Parameter expected_hash diperlukan")

    content = await file.read()
    calculated_hash = HashingService.calculate_pdf_hash(content)
    is_valid = calculated_hash == expected_hash

    return VerifyHashResponse(
        is_valid=is_valid,
        provided_hash=expected_hash,
        calculated_hash=calculated_hash,
    )
