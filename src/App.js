import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { auth } from './utils/firebase/firebase.config';

import { Navbar } from './components';
import { Home, Shop, Hats, Authentication } from './pages';

const App = () => {
  const CATEGORIES = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];
  // authentication token
  useEffect(() => {}, []);

  return (
    <div className="app__wrapper">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/auth" element={<Authentication />} />
          <Route index element={<Home clotheCategories={CATEGORIES} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/hats" element={<Hats />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
