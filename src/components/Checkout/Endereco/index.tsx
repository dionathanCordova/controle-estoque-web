import React, { useState } from 'react';

import Cadastro from './Cadstro';
import Cadastrados from './Cadastrados';

import {
   Container,
   Content
} from './styles';

const Endereco: React.FC = () => {
   const [selectPage, setSelectPage] = useState('Cadastro');

   function handleSelectPage(page: string) {
      setSelectPage(page);
   }

   return (
      <Container>
         <Content>
            <div id="header">
               <button onClick={() => handleSelectPage('Cadastrados')}>Selecionar</button>
               <button onClick={() => handleSelectPage('Cadastro')}>Cadastrar</button>
            </div>

            <div id="body">
               {selectPage === 'Cadastro' && (
                  <Cadastro />
               )}

               {selectPage === 'Cadastrados' && (
                  <Cadastrados />
               )}
           </div>
         </Content>
      </Container>
   );
}

export default Endereco;