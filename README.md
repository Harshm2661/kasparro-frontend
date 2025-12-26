Kasparro – Frontend Engineering Assignment

This project is a frontend implementation of Kasparro, an AI-native SEO and Brand Intelligence platform built for the AI-first search era (such as ChatGPT, Gemini, and Perplexity).

The purpose of this assignment is to showcase frontend system design, clean component architecture, and the ability to present a complex, data-driven AI product in a clear and scalable user interface.

Tech Stack Used

This project is built using:

Next.js with the App Router

TypeScript

Tailwind CSS

Zustand for global state management

Mocked JSON data (no backend integration)

Project Structure Overview

The project is organized to clearly separate public pages, product dashboard screens, reusable components, state management, and data.

Public pages are located under:

Home page

Platform overview page

About page

The product dashboard lives under the app section and includes:

A dashboard page for high-level brand metrics

An audit page which is the core product experience

An architecture page that explains the system flow

Reusable layout and UI components are kept separate, mocked data is stored in a dedicated folder, and global state is managed using a single Zustand store.

Architectural Decisions

System-First UI Design
The frontend is designed to reflect Kasparro’s internal audit pipeline. The UI follows a clear flow from inputs, to context processing, to modular audits, and finally to actionable outputs. This ensures the interface represents system thinking rather than disconnected pages.

Modular Audit Architecture
Each audit module is defined using structured JSON data and rendered dynamically in the UI. This approach allows new audit modules to be added easily without modifying the core UI logic.

Global State Management
Zustand is used to manage global state such as the currently selected audit module. This keeps the state predictable, avoids unnecessary prop drilling, and makes the application easier to scale.

Data-Driven UI
All scores, issues, and recommendations are driven entirely from mocked JSON data. Hardcoded values inside components were intentionally avoided to keep the system flexible and realistic.

Key Screens Implemented

Public Website
The public section includes a home page that explains the value proposition quickly, a platform page that explains the AI audit pipeline, and an about page that communicates the mission, product philosophy, and vision for AI-first search.

Product Dashboard
The dashboard provides a high-level snapshot of brand metrics. The audit screen is the core product view, showing seven audit modules with scores, issues, and recommendations. The architecture page explains how the overall system works from a frontend perspective.

Tradeoffs and Assumptions

Visual styling was kept intentionally minimal to prioritize clarity, structure, and readability. No backend or authentication was implemented, as the assignment explicitly allows the use of mocked data. Mock data is used to simulate realistic audit outputs.

How to Run the Project Locally

Install dependencies using npm install
Start the development server using npm run dev
Open the application in the browser at localhost port 3000