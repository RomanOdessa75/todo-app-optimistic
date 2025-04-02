# Todo App with Next.js and React Query

A simple Todo application built with Next.js, React Query, and Tailwind CSS. The app allows users to fetch, create, and delete todos using the JSONPlaceholder API.

## Features

- Fetch and display todos from JSONPlaceholder API
- Add new todos
- Delete existing todos
- Optimistic UI updates
- Modern UI with Tailwind CSS
- TypeScript support

## Prerequisites

- Node.js 18.x or later
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd veel-todo-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- React Query
- Axios

## API Endpoints

The app uses the following JSONPlaceholder API endpoints:

- GET https://jsonplaceholder.typicode.com/todos?_limit=10
- POST https://jsonplaceholder.typicode.com/todos
- DELETE https://jsonplaceholder.typicode.com/todos/{id}
