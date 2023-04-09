import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './Components/layout/Layout';
import { FavoritesContextProvider } from './Store/favorites-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <Layout>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>    
    </BrowserRouter>
  </FavoritesContextProvider>
    
);
