// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import RecentSearches from '../components/RecentSearches';
import CategorySearches from '../components/CategorySearches';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <RecentSearches />
      <CategorySearches />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
