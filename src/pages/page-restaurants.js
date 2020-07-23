import React from 'react';
import { Header } from '../components/header';
import { ContentRestaurants } from '../components/contentRestaurants';

function PageRestaurants() {
    return (
        <div className="page">
            <Header />
            <ContentRestaurants />
        </div>
    );
  }
  export default PageRestaurants;