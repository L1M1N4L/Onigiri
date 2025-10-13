# 📚 Onigiri API Documentation

## Overview

**⚠️ Note: This API documentation is for the planned backend implementation. The backend is not yet implemented - this is currently a frontend-only project.**

The Onigiri platform will provide a comprehensive API for Japanese learning features, user management, and content delivery.

## Planned Base URL

```
Production: https://api.onigiri-project.com/v1
Development: http://localhost:3000/api/v1
```

## Current Status

- **Frontend**: ✅ Complete and deployed
- **Backend API**: 🔄 Planned for future development
- **Database**: 🔄 Planned for future development
- **Authentication**: 🔄 Planned for future development

## Authentication

All API requests require authentication using JWT tokens.

### Headers
```http
Authorization: Bearer <your-jwt-token>
Content-Type: application/json
```

## Endpoints

### Authentication

#### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "fullName": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "fullName": "John Doe",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    "token": "jwt-token-here"
  }
}
```

#### POST /auth/login
Authenticate user and return JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "fullName": "John Doe"
    },
    "token": "jwt-token-here"
  }
}
```

#### POST /auth/google
Authenticate with Google OAuth.

**Request Body:**
```json
{
  "googleToken": "google-oauth-token"
}
```

### User Management

#### GET /user/profile
Get current user profile.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "fullName": "John Doe",
    "avatar": "https://example.com/avatar.jpg",
    "level": "N3",
    "points": 1250,
    "streak": 7,
    "joinedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### PUT /user/profile
Update user profile.

**Request Body:**
```json
{
  "fullName": "John Smith",
  "avatar": "https://example.com/new-avatar.jpg"
}
```

### Learning Content

#### GET /lessons
Get available lessons.

**Query Parameters:**
- `level`: JLPT level (N5, N4, N3, N2, N1)
- `category`: Lesson category (grammar, vocabulary, kanji, reading)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)

**Response:**
```json
{
  "success": true,
  "data": {
    "lessons": [
      {
        "id": "lesson_123",
        "title": "Basic Hiragana",
        "description": "Learn the basic hiragana characters",
        "level": "N5",
        "category": "kanji",
        "duration": 15,
        "difficulty": "beginner",
        "thumbnail": "https://example.com/lesson-thumb.jpg"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "pages": 8
    }
  }
}
```

#### GET /lessons/:id
Get specific lesson details.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "lesson_123",
    "title": "Basic Hiragana",
    "description": "Learn the basic hiragana characters",
    "content": {
      "type": "interactive",
      "steps": [
        {
          "type": "introduction",
          "content": "Welcome to hiragana basics..."
        },
        {
          "type": "practice",
          "content": {
            "question": "What is this character?",
            "options": ["あ", "い", "う", "え"],
            "correct": 0
          }
        }
      ]
    },
    "prerequisites": [],
    "estimatedTime": 15
  }
}
```

#### POST /lessons/:id/complete
Mark lesson as completed.

**Request Body:**
```json
{
  "score": 85,
  "timeSpent": 12,
  "answers": [
    {
      "questionId": "q1",
      "answer": "あ",
      "correct": true
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "pointsEarned": 50,
    "levelUp": false,
    "achievements": ["first_lesson_complete"]
  }
}
```

### Progress Tracking

#### GET /progress
Get user's learning progress.

**Response:**
```json
{
  "success": true,
  "data": {
    "overall": {
      "level": "N3",
      "points": 1250,
      "streak": 7,
      "lessonsCompleted": 45,
      "totalLessons": 200
    },
    "byCategory": {
      "grammar": {
        "completed": 15,
        "total": 50,
        "averageScore": 87
      },
      "vocabulary": {
        "completed": 20,
        "total": 80,
        "averageScore": 92
      },
      "kanji": {
        "completed": 10,
        "total": 70,
        "averageScore": 78
      }
    },
    "recentActivity": [
      {
        "date": "2024-01-15",
        "lessonsCompleted": 3,
        "pointsEarned": 150
      }
    ]
  }
}
```

#### GET /progress/streak
Get current learning streak information.

**Response:**
```json
{
  "success": true,
  "data": {
    "currentStreak": 7,
    "longestStreak": 23,
    "streakGoal": 30,
    "lastActivity": "2024-01-15T10:30:00Z"
  }
}
```

### Community Features

#### GET /leaderboard
Get global leaderboard.

**Query Parameters:**
- `period`: weekly, monthly, all-time (default: weekly)
- `limit`: Number of users to return (default: 50)

**Response:**
```json
{
  "success": true,
  "data": {
    "leaderboard": [
      {
        "rank": 1,
        "user": {
          "id": "user_456",
          "fullName": "Jane Doe",
          "avatar": "https://example.com/avatar.jpg"
        },
        "points": 2500,
        "level": "N2"
      }
    ],
    "userRank": {
      "rank": 1250,
      "points": 1250
    }
  }
}
```

#### GET /achievements
Get user achievements.

**Response:**
```json
{
  "success": true,
  "data": {
    "achievements": [
      {
        "id": "first_lesson",
        "name": "First Steps",
        "description": "Complete your first lesson",
        "icon": "🎯",
        "unlockedAt": "2024-01-01T00:00:00Z",
        "points": 10
      }
    ],
    "totalAchievements": 25,
    "unlockedCount": 8
  }
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

### Common Error Codes

- `VALIDATION_ERROR`: Invalid request data
- `UNAUTHORIZED`: Missing or invalid authentication
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `RATE_LIMITED`: Too many requests
- `SERVER_ERROR`: Internal server error

## Rate Limiting

API requests are rate limited:
- **Authenticated users**: 1000 requests per hour
- **Unauthenticated users**: 100 requests per hour

Rate limit headers are included in responses:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## SDKs and Libraries

### JavaScript/TypeScript
```bash
npm install @onigiri/sdk
```

```typescript
import { OnigiriAPI } from '@onigiri/sdk';

const api = new OnigiriAPI({
  baseURL: 'https://api.onigiri-project.com/v1',
  token: 'your-jwt-token'
});

const lessons = await api.lessons.getAll({ level: 'N5' });
```

### Python
```bash
pip install onigiri-sdk
```

```python
from onigiri import OnigiriAPI

api = OnigiriAPI(
    base_url='https://api.onigiri-project.com/v1',
    token='your-jwt-token'
)

lessons = api.lessons.get_all(level='N5')
```

## Webhooks

Onigiri supports webhooks for real-time updates:

### Available Events
- `user.registered`: New user registration
- `lesson.completed`: Lesson completion
- `achievement.unlocked`: Achievement unlocked
- `streak.broken`: Learning streak broken

### Webhook Payload
```json
{
  "event": "lesson.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "userId": "user_123",
    "lessonId": "lesson_456",
    "score": 85,
    "pointsEarned": 50
  }
}
```

## Support

For API support and questions:
- **Email**: api-support@onigiri-project.com
- **Documentation**: https://docs.onigiri-project.com
- **Status Page**: https://status.onigiri-project.com
