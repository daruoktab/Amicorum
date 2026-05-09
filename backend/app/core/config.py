from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "SPPG Monitor Backend"
    API_V1_STR: str = "/api/v1"
    
    # Blockchain
    BLOCKCHAIN_RPC_URL: Optional[str] = None
    PRIVATE_KEY: Optional[str] = None
    CONTRACT_ADDRESS: Optional[str] = None
    
    # AI
    GOOGLE_API_KEY: Optional[str] = None
    
    # Firebase
    FIREBASE_CREDENTIALS_PATH: Optional[str] = None

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
