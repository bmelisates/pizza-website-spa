# Teknolojik Yemekler — Pizza Ordering SPA

A React single-page pizza-ordering demo built as part of the Workintech Sprint 8 challenge. The interface is in Turkish.

**[Live Demo](https://pizza-website-spa.vercel.app/)**

## Features

- Home page with navigation to the pizza order form.
- Pizza size, dough thickness, and 4–10 topping selections.
- Customer name and optional order notes.
- Quantity controls and a live price summary, with topping costs calculated per pizza.
- Client-side validation and a submit button that stays disabled while required inputs are missing or an order is being submitted.
- Axios submission to a demo API and an order confirmation page showing the selected options and prices.
- Order data shared through React state and props, with session storage preserving the latest order summary across page reloads in the same tab.
- Vercel routing configuration for direct access and page refreshes. Opening the confirmation page without saved order data redirects to the order form.

## Technologies

- React and JavaScript
- React Router
- CSS, Bootstrap, and Reactstrap
- Axios
- Vite
- Cypress
- Vercel

## Getting Started

Install Node.js and npm, then run:

```bash
git clone https://github.com/bmelisates/pizza-website-spa.git
cd pizza-website-spa
npm install
npm run dev
```

Open the local URL printed by Vite.

## Running Tests

Keep the development server running at `http://localhost:5173`, which the Cypress tests use. In another terminal, run the project-specific suite:

```bash
npx cypress run --spec "cypress/e2e/pizza.cy.js"
```

For the interactive runner:

```bash
npx cypress open
```

The suite contains tests for home-page order buttons, name input, minimum name length, topping selection limits, dough selection, submit-button state, and submission to the confirmation page. The submission test uses the external demo API, so it requires network access and a working API configuration.

Cypress example specs are also included; the command above runs only the pizza project's suite.

## Production Build

```bash
npm run build
npm run preview
```

## Demo API

The form sends a POST request to `https://reqres.in/api/pizza`. This is an educational demo and does not place real food orders. Use dummy information when trying the form, since the entered fields are sent to an external service. API availability and access requirements may change.

## Project Background

Developed from the Workintech Sprint 8 starter project and supplied design assets.

The original project requirements and assessment criteria are preserved in [Assignment](docs/assignment.md).
