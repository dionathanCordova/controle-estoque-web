import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import HeaderContent from '../../components/HeaderContent';
import SearchBox from '../../components/SearchBox';

import { Container } from './styles';

const Home: React.FC = () => {
   return (
      <Container>
         <Header />
         <HeaderContent />
         <SearchBox />

         <Footer />
      </Container>
   )
}

export default Home;