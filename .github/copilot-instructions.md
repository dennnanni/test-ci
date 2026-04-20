# MEVN + Go Template Application

This is a template application written with a MEVN architecture (with frontend and backend present in folders `frontend` and `backend` respectively), with an additional api service (in folder `ext-api-service`) written in Go.

The application has a simple web UI in Vue.js that has a button, which contacts the backend. It then makes a request to the Go API service, which returns a message that is displayed in the UI.

This project focuses on DevOps practices, with a CI/CD pipeline set up using GitHub Actions. It is also packaged using Docker, and uses docker-compose for orchestration. There are two docker-compose files: one for development and one for production. The development compose file mounts the source code as volumes, allowing for hot-reloading, while the production compose file builds the images from the source code folder without mounting volumes.

Development environment can be run with `docker-compose -f docker-compose.dev.yml up`, and destroyed with `docker-compose -f docker-compose.dev.yml down -v`.
