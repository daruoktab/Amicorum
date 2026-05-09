import hashlib

def calculate_pdf_hash(file_content: bytes) -> str:
    """
    Menghitung hash SHA-256 dari konten file PDF.
    """
    sha256_hash = hashlib.sha256()
    sha256_hash.update(file_content)
    return sha256_hash.hexdigest()

def verify_pdf_hash(file_content: bytes, original_hash: str) -> bool:
    """
    Memverifikasi apakah hash file saat ini cocok dengan hash yang disimpan.
    """
    current_hash = calculate_pdf_hash(file_content)
    return current_hash == original_hash
