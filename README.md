# Vanlife

A van rental app built while working through the advanced React course on Scrimba. This is my own TypeScript replication of the project, built with React, React Router, and Vite.

## Tech Stack

- React
- TypeScript
- React Router (`react-router-dom`)
- Vite

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <your-repo-url>
cd vanlife
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable            | Description                            | Example                 |
| ------------------- | -------------------------------------- | ----------------------- |
| `VITE_API_BASE_URL` | Base URL for the vans API or mock data | `http://localhost:3001` |

Only variables prefixed with `VITE_` are exposed to the client, so never put secrets in them.

### Running Locally

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
npm run preview
```

## Features

- Browse available vans
- View details for a single van
- Filter vans by type (simple, luxury, rugged)

Update this list as you build out the course.

## What I Learned

- Routing with React Router, including dynamic route params
- Typing props, state, and API data with TypeScript
- Structuring a Vite + React project

## Acknowledgements

Built while following the Scrimba advanced React course.
