// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import TopicsPage from './pages/TopicsPage';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/Stadiums';

// For Create and Edit, use the form OR table design; not both.

// If your schema requires SHORT data input, then use the TABLE design.
import EditMoviePageTable from './pages/EditStadiumPageTable';
import AddMoviePageTable from './pages/AddStadiumPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [movie, setMovieToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Portfolio</h1>
            <p>Describe this website.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/stadiums" element={<MoviesPage />} />
                    
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddMoviePageTable />} /> 
                    <Route path="/update" element={<EditMoviePageTable movieToEdit={movie} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Murat Seckin Kuvandik.</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;