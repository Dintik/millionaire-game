# Millionaire Game

An interactive quiz game "Who Wants to Be a Millionaire?" developed using modern web technologies.

[Live Demo](https://millionaire-game-zeta.vercel.app/) | [GitHub Repository](https://github.com/Dintik/millionaire-game)

## Technologies

- Next.js 15.3
- React 19
- TypeScript
- SASS for styling
- Zustand for state management
- Zod for data validation

## Requirements

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   Bash

git clone https://github.com/Dintik/millionaire-game.git
cd millionaire-game

2. Install dependencies:
   Bash

npm install

## Running the Project

### Development Mode

Bash

npm run dev
The application will be available at: http://localhost:3000

### Production Build

Bash

npm run build
npm start

## Project Structure

src/
├── app/ # Next.js app router
│ ├── page.tsx # Home page
│ ├── game/ # Game page and logic
│ ├── result/ # Results page
│ └── layout.tsx # Root layout
├── components/ # React components
├── store/ # State management (Zustand)
├── data/ # Game data
├── helpers/ # Utility functions
├── types/ # TypeScript types
└── assets/ # Static assets

## Features

- Gameplay in "Who Wants to Be a Millionaire?" style
- Questions of varying difficulty
- Score tracking system
- Responsive design

## Available Scripts

- npm run dev - run in development mode
- npm run build - build the project
- npm start - run the built project
- npm run lint - check code with linter
- npm run format - format code

## Development

The project uses:

- ESLint for linting
- Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript for type safety

## Deployment

The project is deployed on Vercel. Each push to the main branch automatically triggers a new deployment.
