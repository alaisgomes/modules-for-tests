import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Classic Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian Fiction",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Coming-of-age Fiction",
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
  },
  {
    id: 8,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
  },
];

function BookListComponent() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Book Collection</Text>
      <Text style={styles.subtitle}>
        A curated list of classic and popular books
      </Text>

      {books.map((book) => (
        <View key={book.id} style={styles.bookItem}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>by {book.author}</Text>
          <View style={styles.bookDetails}>
            <Text style={styles.bookYear}>{book.year}</Text>
            <Text style={styles.bookGenre}>{book.genre}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 24,
  },
  bookItem: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 8,
  },
  bookDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookYear: {
    fontSize: 12,
    color: "#7f8c8d",
    fontWeight: "500",
  },
  bookGenre: {
    fontSize: 12,
    color: "#3498db",
    fontWeight: "500",
  },
});

export default {
  title: "book-list",
  navigator: BookListComponent,
};
