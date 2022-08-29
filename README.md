# Take-Home Challenge (Min Nam)

## Installation
Run `npm install` and then `npm start` to run the application or go to https://coral-app-ynjwl.ondigitalocean.app/ 

## Used Packages
- `create-react-app` to initiate the project
- `emotion` (https://www.npmjs.com/package/@emotion/react)  
- `tailwind css` (https://www.npmjs.com/package/tailwindcss)
- Some dev enviornment setup: `prettier` and `eslint`

## Limitations
- For the scope of this project, I have not implemented SSR. However, I demonstrated wrapping `task-2` with HOC which
would handle SSR and mimic API calls.

## How to navigate the project
1. Go to https://localhost:3000 or https://coral-app-ynjwl.ondigitalocean.app/ 
2. See Task 1,2, and 3 pages, its source code, and components.

## Interactive
### Task 1
- Mobile menu
- Category Selector
### Task 2
- Mobile menu
### Task 3
- Time-series Graph

## What can be improved
- Time-series graph should be debounced with `requestAnimationFrame()` for better performance.
- Overlapping x-axis label.

## Out of scope
- Ghost