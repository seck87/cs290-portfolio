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
import StadiumsPage from './pages/Stadiums';
import Stadium from './components/Stadium';




// For Create and Edit, use the form OR table design; not both.
// If your schema requires SHORT data input, then use the TABLE design.
import AddStadiumPageTable from './pages/AddStadiumPageTable';
import EditStadiumPageTable from './pages/EditStadiumPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [stadiumToEdit, setStadiumToEdit] = useState([])

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
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/stadiums" element={<StadiumsPage setStadium={setStadiumToEdit} />} />
                    <Route path="/create" element={<AddStadiumPageTable />} /> 
                    <Route path="/update" element={<EditStadiumPageTable stadiumToEdit={stadiumToEdit} />} />
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