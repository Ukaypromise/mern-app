# Event Scheduler API Documentation

Description: This is a simple event scheduler API built with Node.js, Express, MongoDB and Mongoose. It is a simple API that allows users to create events, update events, delete events and get all events. It also allows users to register and login to the application.

## Live ( deployed version )

Visit [Not available yet!!](https://not-available-ye.com)

## Testing Locally

Clone the repository

```console
git clone https://github.com/Ukaypromise/mern-app.git
```

Change directory to the cloned folder

```console
cd backend
```

Install necessary dependency to run the project

```console
npm install
```

Create a .env files to set environment variables

```console
NODE_ENV = development
PORT = 5001 or //choose prefered port
MONGO_URI= // Add mongo uri here
JWT_SECRET= // Add jwt secret here
JWT_EXPIRES_IN=2d
```

Start the server

```console
nmp run server
```

## Available Endpoint

## Authorization | Events

- Bear Token is required for all endpoints except getting all events endpoints

### Get All Events

| AUTHORIZATION | Method | Description      | Endpoint                           |
| ------------- | ------ | ---------------- | ---------------------------------- |
| Not Required  | _GET_  | Shows all events | `http://localhost:5001/api/events` |

### Get User Events

| AUTHORIZATION | Method | Description           | Endpoint                             |
| ------------- | ------ | --------------------- | ------------------------------------ |
| Bearer Token  | _GET_  | Shows all user events | `http://localhost:5001/api/myevents` |

### POST Create Event

| AUTHORIZATION | Method | Description      | Endpoint                           |
| ------------- | ------ | ---------------- | ---------------------------------- |
| Bearer Token  | _POST_ | Shows all events | `http://localhost:5001/api/events` |

| BODY                | urlencoded               |
| ------------------- | ------------------------ |
| name                | Ruby Conference          |
| description         | Ruby Summit 2023         |
| registrationEndDate | 2023-03-31               |
| startDateTime       | 2023-04-14T18:30:00.000Z |
| endDateTime         | 2023-04-14T21:30:00.000Z |
| place               | Event Location           |
| price               | 10.99                    |

### PUT Update Event

| AUTHORIZATION | Method | Description      | Endpoint                               |
| ------------- | ------ | ---------------- | -------------------------------------- |
| Bearer Token  | _PUT_  | Shows all events | `http://localhost:5001/api/events/:id` |

| BODY                | urlencoded               |
| ------------------- | ------------------------ |
| name                | Ruby Conference          |
| description         | Ruby Summit 2023         |
| registrationEndDate | 2023-03-31               |
| startDateTime       | 2023-04-14T18:30:00.000Z |
| endDateTime         | 2023-04-14T21:30:00.000Z |
| place               | Event Location           |
| price               | 10.99                    |

### DELETE Delete Event

| AUTHORIZATION | Method   | Description      | Endpoint                               |
| ------------- | -------- | ---------------- | -------------------------------------- |
| Bearer Token  | _DELETE_ | Shows all events | `http://localhost:5001/api/events/:id` |

## Authorization | User

### POST Register User

| AUTHORIZATION | Method | Description     | Endpoint                                   |
| ------------- | ------ | --------------- | ------------------------------------------ |
| Not Required  | _POST_ | Register a user | `http://localhost:5001/api/users/register` |

| BODY     | urlencoded        |
| -------- | ----------------- |
| name     | Promise           |
| email    | promise@gmail.com |
| password | 123456            |

### POST Login User

| AUTHORIZATION | Method | Description  | Endpoint                                |
| ------------- | ------ | ------------ | --------------------------------------- |
| Bearer Token  | _POST_ | Login a user | `http://localhost:5001/api/users/login` |

| BODY     | urlencoded        |
| -------- | ----------------- |
| email    | promise@gmail.com |
| password | 123456            |

### GET User Profile

| AUTHORIZATION | Method | Description      | Endpoint                             |
| ------------- | ------ | ---------------- | ------------------------------------ |
| Bearer Token  | _GET_  | Get user profile | `http://localhost:5001/api/users/me` |
