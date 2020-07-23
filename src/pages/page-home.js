import React from 'react';
import { Header } from '../components/header';
import { ContentHome } from '../components/contentHome';

function PageHome() {
    return (
        <div className="page">
            <Header />
            <ContentHome />
        </div>
    );
  }
  export default PageHome;