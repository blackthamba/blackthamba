# Vite + React + TypeScript

This project uses [Vite](https://vitejs.dev/) for fast development and build, with React and TypeScript.

## Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run preview`
Locally preview the production build.

## Static Assets
- Place static files (like images) in the `public/` folder. Access them in code with `${import.meta.env.BASE_URL}img/your-image.png`.

## Deployment
- For GitHub Pages, set the `base` option in `vite.config.ts` to your repo name (e.g., `/blackthamba/`).
- After building, deploy the contents of the `dist` folder.

## Learn More
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
