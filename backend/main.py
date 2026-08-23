import os

from clerk_backend_api import Clerk
from clerk_backend_api.security.types import AuthenticateRequestOptions
from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer

app = FastAPI()
load_dotenv()

origins = os.getenv("ALLOWED_ORIGINS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBearer()

# Initialize Clerk SDK
clerk_client = Clerk(bearer_auth=os.getenv("CLERK_SECRET_KEY"))

async def verify_token(request: Request):
    """
    Dependency to verify the Clerk JWT token.
    Raises an HTTPException if unauthenticated.
    """
    try:
        # The authenticate_request method works with FastAPI requests out of
        # the box in the latest SDK
        request_state = clerk_client.authenticate_request(
            request,
            AuthenticateRequestOptions()
        )

        if not request_state.is_signed_in:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Unauthenticated"
            )

        return request_state
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Authentication error: {str(e)}"
        )

@app.get("/")
def root():
    return {"message": "FastAPI backend is running (Public Route)"}


@app.get("/health", dependencies=[Depends(verify_token)])
def health():
    return {"status": "healthy", "message": "This is a protected route!"}
