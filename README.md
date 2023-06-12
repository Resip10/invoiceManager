# Invoice Manager
### Frontend Assignment in Rodeo

## Context:
- A project can have multiple invoices
- One invoice can have multiple items
- Items may include hours of work at a certain rate or work-related expenses
- Invoices have due date
- Over each cost item one of three tax rates, incl. 0%, is added
- The entire invoice can have one relative discount or fee
- Fees and discounts happen before tax

## Acceptance criteria:
- I can see the list of projects
- I can see the list of invoices for each project
- I can see the price of each cost item
- I can see the invoice subtotal and total price
- I can print the invoice

## TODO:
- Cover components/services/helpers by unit tests
- Move all "magic" strings and variables under shared constants
- Add lazy loaders and skeletons for better UX, as real data fetching may take some time
- Add i18n for text and currencies
- Add support for caching API callback results. Some libraries (like React Query) make it possible

## Notes:
- This application has no interactivity. So it's possible to use SCR with its pros. It's possible to implement with Next.js

## Getting Started

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
