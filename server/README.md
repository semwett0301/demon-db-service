# Server-side Application

## Project Structure
- ***resources*** - Meta-information for project startup
- ***config*** - Filter configuration
- ***controllers*** - MVC controllers
- ***dto*** - Data structures transmitted via HTTP
- ***entity*** - Data structures describing database entities
- ***exceptions*** - Custom exceptions
- ***repository*** - JPA repositories
- ***service*** - Application service layer
- ***interfaces*** - Service interfaces

## Database Startup Script
- Docker (docker-compose) is required for database operation
- Then run: ```docker-compose up```
- Database access is done via credentials specified in [docker-compose.yml](./docker-compose.yml)
- Database migration configuration is located in [changelog](./src/main/resources/db/changelog) folder

## Application Startup Script
- Add current project to Gradle
- ```./gradlew bootRun```
- After startup, the application will be available at ```localhost:7000```

## Swagger UI
- Available at [```http://localhost:7000/swagger-ui/index.html```](http://localhost:7000/swagger-ui/index.html)
- JSON format can be obtained at [```http://localhost:7000/v3/api-docs/```](http://localhost:7000/v3/api-docs/)

