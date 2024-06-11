# Intelligent Load Balancer for Multi-API Management

## Introduction
This project is a demonstration of an intelligent load balancer that dynamically routes incoming requests to multiple API endpoints. It showcases dynamic routing, request handling, logging, and queue management using RabbitMQ.

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or later)
- **npm**
- **MongoDB** (running locally or accessible)
- **Docker** (for RabbitMQ)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/wasserstoff-backendtask.git
    cd wasserstoff-backendtask
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/yourdatabase
    RABBITMQ_URL=amqp://localhost:5672
    ```

4. **Start MongoDB:**

    Ensure MongoDB is running locally or accessible as configured in your `.env` file.

5. **Start RabbitMQ:**

    Run RabbitMQ using Docker:

    ```bash
    docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
    ```

6. **Start the Node.js servers:**

    Run the following commands in separate terminal windows to start the servers on different ports:

    ```bash
    PORT=3001 npm run dev
    PORT=3002 npm run dev
    PORT=3003 npm run dev
    PORT=3004 npm run dev
    PORT=3005 npm run dev
    ```

7. **Verify the setup:**

    - **Access the application**: Open your browser and navigate to `http://localhost:3000` to access the load balancer.
    - **RabbitMQ management console**: Navigate to `http://localhost:15672` (default username and password are `guest`/`guest`).

## Endpoints

### REST API Endpoints

- **Products:**
  - `GET /api/products`: Retrieve all products
  - `GET /api/products/:id`: Retrieve a product by ID
  - `POST /api/products`: Create a new product
  - `PUT /api/products/:id`: Update a product by ID
  - `DELETE /api/products/:id`: Delete a product by ID

- **Users:**
  - `GET /api/users`: Retrieve all users
  - `GET /api/users/:id`: Retrieve a user by ID
  - `POST /api/users`: Create a new user
  - `PUT /api/users/:id`: Update a user by ID
  - `DELETE /api/users/:id`: Delete a user by ID

- **Orders:**
  - `GET /api/orders`: Retrieve all orders
  - `GET /api/orders/:id`: Retrieve an order by ID
  - `POST /api/orders`: Create a new order
  - `PUT /api/orders/:id`: Update an order by ID
  - `DELETE /api/orders/:id`: Delete an order by ID

### GraphQL API Endpoint
- Access the GraphQL API at `http://localhost:3000/graphql`.

## Logging
Logs are stored in `logs/requests.log` and include details about request URLs and response times.

## Queuing Strategies
The load balancer uses RabbitMQ for managing request queues. To change the queue type, update the `requestQueue` in `src/services/queueManager.js`.

## Video Screencast
[Video Link](#)

## Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License
This project is open source and available under the [MIT License](LICENSE).

## Project Structure

