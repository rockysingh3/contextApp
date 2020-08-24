import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookLIst";
import ThemecontextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemecontextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemecontextProvider>
    </div>
  );
}

export default App;
