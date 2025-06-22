# Movie Database

A modern React web application for browsing, searching, and saving your favorite movies, inspired by IMDb.

## Features
- Movie search using the OMDb API
- Trending movies section
- Movie details view
- Add/remove favorites (with localStorage persistence)
- Genre filter (UI only, due to OMDb API limitations)
- Responsive design for mobile and desktop
- Modern UI using Material-UI
- CI/CD with GitHub Actions for automated testing and deployment

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher recommended)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd movie-database
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   The app will be available at http://localhost:3000

### Build for Production
```sh
npm run build
```

## Project Structure
- `src/components/` — All React components (Header, NavBar, MovieList, etc.)
- `src/App.js` — Main application logic
- `public/` — Static assets (add your favicon/logo here)

## Customization
- To use your own OMDb API key, update the `API_KEY` constant in `src/App.js`.
- To add a custom logo or favicon, replace the files in the `public/` directory and update `public/index.html` as needed.

## License
This project is for educational and personal use only.

---

**Enjoy your Movie Database!**
