import React from 'react';

import Header from '../../components/Header';
import HeaderContent from '../../components/HeaderContent';

import { Container } from './styles';

const Home: React.FC = () => {
   return (
      <Container>
         <Header />
         <HeaderContent />
      </Container>
   )
}

export default Home;