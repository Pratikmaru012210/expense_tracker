from fastapi.testclient import TestClient

from main import app, verify_token

client = TestClient(app)

def mock_verify_token():
    return True

app.dependency_overrides[verify_token] = mock_verify_token

def test_health():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "healthy",
        "message": "This is a protected route!"
    }
