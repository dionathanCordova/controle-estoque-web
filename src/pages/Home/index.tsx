import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import HeaderContent from '../../components/HeaderContent';
import SearchBox from '../../components/SearchBox';
import UrlPath from '../../components/UrlPath';

import { Container } from './styles';

const Home: React.FC = () => {
   return (
      <Container>
         <Header />
         <HeaderContent />
         <SearchBox />
         <UrlPath url="Home "/>


         <Footer />
      </Container>
   )
}

export default Home;