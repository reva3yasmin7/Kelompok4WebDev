// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import RecentSearches from '../components/RecentSearches';
import CategorySearches from '../components/CategorySearches';
import Testimonials from '../components/Testimonials';


function Home() {
  return (
    <div>
      <HeroSection />
      <RecentSearches />
      <CategorySearches />
      <Testimonials />
    
    </div>
  );
}

export default Home;
