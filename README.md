# EventBite App

Description: This is a simple event scheduler API built with Node.js, Express, MongoDB and Mongoose. It is a simple API that allows users to create events, update events, delete events and get all events. It also allows users to register and login to the application.

## Live ( deployed version )

Visit [Not available yet!!](https://not-availablefornow.com)
### Landing Page
<img width="1409" alt="Screenshot 2023-03-24 at 15 18 09" src="https://user-images.githubusercontent.com/85847249/227552835-548fc9d9-7756-4c5a-99c8-d28008fba3be.png">

### Register Page
<img width="855" alt="Screenshot 2023-03-24 at 15 18 34" src="https://user-images.githubusercontent.com/85847249/227555342-5164d950-9430-49b2-b813-ec08834ee937.png">

### Login Page
<img width="556" alt="Screenshot 2023-03-24 at 15 18 50" src="https://user-images.githubusercontent.com/85847249/227553048-91833c02-7e82-463b-ac71-80cd554c5e94.png">

### Event Page
<img width="1416" alt="Screenshot 2023-03-24 at 15 19 28" src="https://user-images.githubusercontent.com/85847249/227553049-ef65e830-cd46-434b-870d-b4eec3655246.png">

### Create Event Page
<img width="1230" alt="Screenshot 2023-03-24 at 15 19 47" src="https://user-images.githubusercontent.com/85847249/227553050-5c79531b-b19c-4695-8d20-5a788271e749.png">



## Testing Locally

Clone the repository

```console
git clone https://github.com/Ukaypromise/mern-app.git
```

Backend

```console
cd backend

npm run server
```

Frontend

```console
cd frontend
npm run client
```

Install necessary dependency to run the project

```console
npm install
```

To run both the frontend and backend together

```console
npm run dev
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
# EventBite API Documentation

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
