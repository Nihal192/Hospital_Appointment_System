# Hospital Appointment System

This repository contains a minimal appointment booking system with a Java Spring Boot back-end and a Next.js front-end.

## Backend

The back-end is a Spring Boot application located in `backend/`.

### Build and Run

```bash
cd backend
gradle bootRun
```

The application exposes REST endpoints under `/api/appointments`.

## Frontend

The front-end is a simple Next.js application in `frontend/`.

### Develop

```bash
cd frontend
npm run dev
```

This will start the development server on <http://localhost:3000> and proxy API requests to the back-end.
