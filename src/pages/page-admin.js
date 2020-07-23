import React from 'react';
import { Header } from '../components/header';
import { ContentAdmin } from '../components/contentAdmin';

function PageAdmin() {
    return (
        <div className="page">
            <Header />
            <ContentAdmin />
        </div>
    );
  }
  
  export default PageAdmin;