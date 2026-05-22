from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.blockchain_service import BlockchainService
from app.services.hashing_service import HashingService
from app.schemas.blockchain import NotarizeResponse, VerifyResponse

router = APIRouter()
blockchain_service = BlockchainService()


@router.post("/notarize", response_model=NotarizeResponse)
async def notarize_pdf(file: UploadFile = File(...)):
    """
    Upload file PDF, hitung hash-nya, lalu simpan hash ke blockchain.
    """
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Hanya file PDF yang didukung")

    content = await file.read()
    pdf_hash = HashingService.calculate_pdf_hash(content)

    try:
        result = await blockchain_service.notarize_pdf_hash(pdf_hash)
        return NotarizeResponse(
            status=result.get("status", "pending"),
            pdf_hash=pdf_hash,
            transaction_hash=result.get("transaction_hash"),
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gagal menyimpan ke blockchain: {str(e)}")


@router.post("/verify", response_model=VerifyResponse)
async def verify_pdf(file: UploadFile = File(...)):
    """
    Upload file PDF, hitung hash-nya, lalu verifikasi keasliannya di blockchain.
    """
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Hanya file PDF yang didukung")

    content = await file.read()
    pdf_hash = HashingService.calculate_pdf_hash(content)

    try:
        result = await blockchain_service.verify_pdf_hash(pdf_hash)
        return VerifyResponse(
            is_valid=result.get("is_valid", False),
            pdf_hash=pdf_hash,
            stored_hash=result.get("hash"),
            message="Hash terverifikasi di blockchain" if result.get("is_valid") else "Hash tidak ditemukan di blockchain",
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gagal verifikasi di blockchain: {str(e)}")
