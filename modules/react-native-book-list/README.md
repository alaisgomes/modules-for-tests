# React Native Book List Module

## Overview

This module contains a React Native component that displays a static list of books. It demonstrates basic list rendering, styling, and component structure in React Native.

## Features

- Static list of 8 classic and popular books
- Clean, card-based design with shadows and styling
- Displays book title, author, publication year, and genre
- Responsive scrollable view
- Modern styling with proper spacing and typography

## Structure

```
react-native-book-list/
├── index.js          # Main component with book list
├── package.json      # Package configuration
├── meta.json         # Module metadata
└── README.md         # This file
```

## Usage

The module exports a default object with:

- `title`: "book-list" - identifier for the module
- `navigator`: BookListComponent - the React component

## Book Data

The component includes a curated list of books spanning different genres:

- Classic Fiction (The Great Gatsby, To Kill a Mockingbird, etc.)
- Dystopian Fiction (1984)
- Fantasy (Harry Potter, Lord of the Rings)
- Science Fiction (Hitchhiker's Guide to the Galaxy)
- Romance (Pride and Prejudice)

## Styling

The component uses React Native StyleSheet with:

- Card-based layout with shadows
- Consistent color scheme (#2c3e50, #3498db, #7f8c8d)
- Proper spacing and typography hierarchy
- Responsive design for different screen sizes

## Testing Purpose

This module is designed for testing purposes to validate:

- List rendering performance
- Component structure and exports
- Styling consistency
- ScrollView functionality
- Static data display patterns
