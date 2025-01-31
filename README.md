
# BagiraTest Application

This repository contains a microservices-based application with a backend, frontend, and database using Docker. The backend is built with ASP.NET Core, the frontend uses React, and the database is PostgreSQL.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RivkyShachar/BagiraTest.git
   cd BagiraTest
   ```

2. **Install Docker:**
   Ensure that Docker is installed on your system. You can download Docker from [here](https://www.docker.com/get-started).

3. **Docker Compose:**
   This project uses Docker Compose to manage multiple services (backend, frontend, and database). Docker Compose allows you to define and run multi-container Docker applications.

## How to Run the Application Locally with Docker

1. **Build and Start the Application:**

   Run the following command to build the Docker images and start the services defined in `docker-compose.yml`:
   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build the Docker images for the frontend and backend.
   - Start the PostgreSQL container with the `init.sql` file to set up the database.
   - Link the backend and frontend containers to the PostgreSQL database.

2. **Access the Application:**

   Once the application is up and running, you can access:
   - **Frontend**: `http://localhost:3000`
   - **Backend**: `http://localhost:8081`
   - **PostgreSQL Database**: `localhost:5434`

   The database connection is set up in the backend to connect to PostgreSQL at the following settings:
   - **Host**: `db`
   - **Port**: `5432`
   - **Username**: `postgres`
   - **Password**: `Bagira1234`
   - **Database**: `mydb`

3. **Stopping the Application:**

   To stop the running containers, use:
   ```bash
   docker-compose down
   ```

4. **Rebuilding the Containers:**

   If you make changes to the application and want to rebuild the Docker containers, use:
   ```bash
   docker-compose up --build
   ```

## Project Structure

- **`docker-compose.yml`**: Defines the Docker services for the backend, frontend, and database.
- **`server/Dockerfile`**: Dockerfile for building the backend service (ASP.NET Core).
- **`client/Dockerfile`**: Dockerfile for building the frontend service (React).
- **`init.sql`**: Initializes the PostgreSQL database when the container starts.
- **`appsettings.json`**: Configuration file for backend (e.g., database connection strings).
- **`appsettings.Development.json`**: Configuration file for logging in development mode.

## Notes

- **Backend Logs**: You can view logs for the backend by running:
  ```bash
  docker logs -f bagiratest-backend
  ```
- **Frontend Logs**: Similarly, you can view frontend logs by running:
  ```bash
  docker logs -f bagiratest-frontend
  ```

## Troubleshooting

- Ensure Docker is running and you have the necessary permissions to run Docker commands.
- If the database is not initializing, check the `init.sql` file for errors.
- If there are issues with the backend or frontend not loading, check their respective logs for error messages.