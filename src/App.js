import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookLIst";
import ThemecontextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemecontextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemecontextProvider>
    </div>
  );
}

export default App;
