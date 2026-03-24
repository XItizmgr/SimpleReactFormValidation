# User Registration System

A lightweight, high-performance registration interface built with React 18. This project implements dynamic form handling and client-side validation logic to provide a seamless user experience while maintaining a minimal memory footprint.

## Core Features

### 1. Advanced Form Validation
The system utilizes declarative validation rules powered by the React Hook Form library for robust data integrity.
* Input Constraints: Enforces mandatory fields, specific character counts (4–12 for names, minimum 6 for passwords), and strict email formatting.
* Live Feedback: Implements conditional rendering to display real-time error messages from the formState object immediately upon validation failure.

### 2. Optimized Performance
The project is architected to handle data management efficiently by minimizing unnecessary re-renders.
* Ref-based Inputs: Uses the register spread operator to link inputs directly to the library logic, reducing overhead compared to controlled components.
* Standardized Submission: Employs a centralized handleSubmit function to process validated data and manage event propagation.

## Tech Stack
* Frontend: React 18 (Functional Components, Hooks)
* Form Logic: React Hook Form
* Styling: CSS3 (Flexbox, Transitions)

## Project Structure
* main.jsx – Application entry point and StrictMode wrapper.
* App.jsx – Main layout container.
* component/form.jsx – Core registration logic and validation schemas.
* App.css – Modern UI styling with a deep-sea blue palette and backdrop-filter elements.

## Installation and Usage
1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided local link in your browser to view the application.
