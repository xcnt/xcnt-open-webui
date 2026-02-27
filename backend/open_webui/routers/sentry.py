import os

from fastapi import APIRouter

router = APIRouter()

@router.get("/dsn")
async def get_sentry_dsn():
    return {"dsn": os.getenv("SENTRY_DSN", "")}