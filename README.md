# BOOK.ly — Book Finder

A React book-search prototype by Nir Tuttnuaer and Arik Leikin. Enter a display
name, then search the Google Books API to see book titles, authors, and available
cover thumbnails. The name is held in React state; it is not an account or an
authentication mechanism.

## Run locally

Install Node.js and npm, then run from the repository root:

```sh
npm ci
npm start
```

Open the local address printed by the development server (normally
`http://localhost:3000`). Enter a name, click **Sign In**, type a search query,
and click **Search**. Searches need an internet connection. The current code
calls the public Google Books volumes endpoint directly from the browser and
does not require an API key or a `.env` file.

## Build and test

```sh
npm run build
CI=true npm test -- --watchAll=false --runInBand
```

The production build is written to `build/`. When hosting it, configure the
server to return `index.html` for client-side routes such as `/search`.

Verified with Node.js v26.13.0 and npm 11.20.0: dependency installation and the
production build complete. The build currently reports existing unused-variable
and image-alt-text lint warnings, plus outdated Browserslist data. The existing
single test fails because it still expects the Create React App “learn react”
link rather than this application's home screen. These are baseline issues,
not a claim that the test suite passes.

## Project layout

- `src/App.js`: routes, in-memory state, and Google Books request.
- `src/components/Home.js`: display-name entry screen.
- `src/components/Search.js`: search input and result cards.
- `src/components/WishList.js`: placeholder wishlist screen.
- `src/components/BookInfo.js`: unfinished book-details screen.
- `public/`: HTML entry point and static assets.

## Prototype limitations

- **Show More** and **Add To Wish List** do not have click handlers yet; wishlist
  persistence is not implemented.
- Opening `/bookinfo` directly fails because the component expects a `book`
  prop that the route does not provide.
- Search requests do not yet handle network errors, API errors, or loading
  states. The input currently stops accepting changes once it reaches 20
  characters; reload the page to reset it if needed.
- Display names and search results are not persisted across reloads.

This README documents the existing prototype; it does not change application
behavior or resolve the limitations above.
