# Entropy Notes

Entropy Notes is a conceptual note-taking application exploring the impermanence of digital memory. It features a unique "decay" mechanic where notes degrade over time if left unmaintained, visually representing the loss of information entropy.

## Features

- **Decay Engine:** Notes accumulate "entropy" based on the time since they were last accessed or maintained.
- **Visual Corruption:** As entropy increases, text becomes increasingly garbled and difficult to read.
- **Impermanence:** Notes that reach 100% entropy are considered "dead" and are no longer readable.
- **Maintenance:** Users can "polish" notes to reset their entropy levels, preserving them for longer.
- **Interactive "Dust":** A dynamic UI overlay simulates dust accumulation, requiring active user interaction to keep the workspace clean.
- **Constraint-Based Input:** A custom input mechanism challenges standard editing behaviors (e.g., no backspace), encouraging deliberate thought.

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Persistence:** JSON-based local storage (Simulating a database)
- **Language:** TypeScript

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Concept

This project was built as an exploration of "Software Entropy" and user attachment to digital artifacts. It challenges the assumption that digital data is permanent by default.

---
*Built with Next.js*
