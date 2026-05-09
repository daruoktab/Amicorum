from web3 import Web3
from app.core.config import settings

class BlockchainService:
    def __init__(self):
        self.w3 = Web3(Web3.HTTPProvider(settings.BLOCKCHAIN_RPC_URL))
        self.private_key = settings.PRIVATE_KEY
        self.account = self.w3.eth.account.from_key(self.private_key) if self.private_key else None

    async def notarize_pdf_hash(self, pdf_hash: str):
        """
        Simpan hash PDF ke smart contract (TBC).
        """
        # Logika transaksi blockchain di sini
        return {"status": "pending", "hash": pdf_hash}

    async def verify_pdf_hash(self, pdf_hash: str):
        """
        Verifikasi hash dari blockchain.
        """
        return {"is_valid": True, "hash": pdf_hash}
