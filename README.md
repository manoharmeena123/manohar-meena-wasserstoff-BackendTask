# Intelligent Load Balancer for Multi-API Management

## Introduction
This project is a demonstration of an intelligent load balancer that dynamically routes incoming requests to multiple API endpoints.

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm run dev`.

## Endpoints
- `/api1/endpoint`: Mock API 1
- `/api2/endpoint`: Mock API 2
- `/api3/endpoint`: Mock API 3
- `/loadbalanced-endpoint`: Load balanced endpoint that routes requests to one of the above APIs based on the routing logic.

## Logging
Logs are stored in `logs/requests.log` and include details about request URLs and response times.

## Queuing Strategies
The load balancer uses a simple queue by default. To change the queue type, update the `requestQueue` in `src/services/queueManager.js`.

## Video Screencast
[Video Link](#)
