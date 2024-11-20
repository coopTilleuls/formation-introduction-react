import React from "react";
import { render, screen } from "@testing-library/react";
import BookList from "../features/book-list/BookList";

it("shows a list of books", () => {
  render(<BookList />);

  expect(screen.getByText(/Corbin Ritchie/)).toBeInTheDocument();
  expect(screen.getByText(/Deonte Effertz/)).toBeInTheDocument();
  expect(screen.getByText(/Dr. Abel Gutmann IV/)).toBeInTheDocument();
  expect(screen.getByText(/Prof. Scotty Pfannerstill DVM/)).toBeInTheDocument();
  expect(screen.getByText(/Ms. Alana Murphy/)).toBeInTheDocument();
});
