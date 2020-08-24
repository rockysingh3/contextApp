import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookLIst';
import ThemecontextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemecontextProvider>
        <Navbar />
        <BookList />
      </ThemecontextProvider>
    </div>
  );
}

export default App;
