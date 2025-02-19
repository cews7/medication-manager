# Medication Manager

This project implements a medication management system for caregivers to track and manage medications for their care recipients.

## Project Structure
The project follows a service-based architecture:
- `api-svc`: Backend service containing API endpoints and database interactions
  - Stack: Node.js, Express, Postgres with Prisma ORM
- `web-svc`: Frontend client application
  - Stack: Vite + React
- `.github/workflows`: CI/CD pipeline configurations for independent service deployments

## Architecture Decisions

### Project Level
- **Service Separation**: Each component (API, web client) is isolated in its own service, enabling independent scaling and deployment
- **RESTful API**: Chose REST over tRPC to maintain service independence and enable potential future service splits
- **GitHub Actions**: Implemented separate deployment pipelines per service to enable independent releases
- **Project Organization**: Structured by domain/behavior rather than technology to support intuitive navigation and scaling

### Frontend
- **Vite + React**: Selected Vite for its lightweight approach over Next.js to reduce complexity while learning React
- **Clerk Authentication**: Provides robust auth management with easy expansion to OAuth providers
- **Directory Structure**: Organized by feature/domain rather than technical function to support maintainable growth

### Backend
- **Prisma ORM**: Chosen for its intuitive API and strong type safety with PostgreSQL
- **Database Design**: Normalized schema with strategic indexing to support future feature expansion
- **Express**: Lightweight framework that maintains flexibility while providing necessary structure

## Development Process
The project development was tracked using Agile methodologies:
- [Medication Manager Trello Board](https://trello.com/invite/b/67b2535b0b1316efe6a23b95/ATTI915333f4812637e7f09b3a40221d11b4C9D84BC8/medication-manager)
