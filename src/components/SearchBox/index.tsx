import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, BoxSearch, Select } from './styles';

const SearchBox: React.FC = () => {
   return (
      <Container>
         <BoxSearch>
            <Select name="" id="categotia">
               <option value="">Categorias</option>
               <option value="">CLIENTE PREFERENCIAL</option>
               <option value="">KIT OURO</option>
               <option value="">KIT PRATA</option>
               <option value="">KIT BRONZE</option>
               <option value="">PRODUTOS</option>
               <option value="">ACESSÓRIOS</option>
            </Select>

            <label htmlFor="">
               <FaSearch size={15} color="#000" />
            </label>
            <input type="text" placeholder="Pesquisar ..." />
         </BoxSearch>
      </Container>
   );
}

export default SearchBox;