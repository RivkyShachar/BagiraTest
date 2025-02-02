# BagiraTest Application

This repository contains a microservices-based application with a backend, frontend, and database using Docker. The backend is built with ASP.NET Core, the frontend uses React, and the database is PostgreSQL.

## Setup Instructions

1. **Install Docker:**  
   Ensure that Docker is installed on your system. You can download Docker from [here](https://www.docker.com/get-started).

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/RivkyShachar/BagiraTest.git
   cd BagiraTest
   ```

3. **Open in a Code Editor:**  
   Open the project in any code editor, for example VS Code:
   ```bash
   code .
   ```

4. **Rename `.env.bak` files to `.env`:**  
   There are two `.env.bak` files in the project. Rename them to `.env`:
   
   **Example `.env` configuration:**
   ```env
   POSTGRES_DB=mydb
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=Bagira1234
   DB_HOST=db
   DB_PORT=5434
   ```

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
   - **Frontend**: Open `http://localhost:3000`
   - **Backend**: `http://localhost:8081`
   - **PostgreSQL Database**: `localhost:5434`

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

## Troubleshooting

If there are errors, check the following:
- **Ensure Docker is running** and you have the necessary permissions to run Docker commands.
- **Database Issues:** If the database is not initializing, check the `init.sql` file for errors.
- **Check Logs:**
  - **Backend Logs:**
    ```bash
    docker logs -f bagiratest-backend
    ```
  - **Frontend Logs:**
    ```bash
    docker logs -f bagiratest-frontend
    ```
- **Verify `.env` files:** Ensure `.env` is correctly renamed and configured as shown above.
- **Check Port Availability:** Ensure that ports `3000`, `8081`, and `5434` are not in use by other applications.

If you still encounter issues, refer to the logs or check Docker's documentation for further debugging.
