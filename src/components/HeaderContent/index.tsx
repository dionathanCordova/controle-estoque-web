import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaArchive, FaSearch } from 'react-icons/fa';
import Cart from '../Cart';
import Context from '../../contexts';

import {
   Container,
   Content,
   BoxSearch,
   BoxInfo,
   BoxChard,
   IconContent,
   IconContentText,
   BoxGroup,
   Select,
   Popup,
} from './styles';

const HeaderContent: React.FC = () => {
   const { ToggleCart, disabledCart } = useContext(Context)

   return (
      <Container>
         <Content>
            <div className="main">
               <h2>Shop Online</h2>

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
                     <FaSearch size={15} color="#000"/>
                  </label>
                  <input type="text" placeholder="Pesquisar ..."/>
               </BoxSearch>

               <Cart />

               <BoxInfo>
                  <BoxChard  onClick={ToggleCart}>
                     <IconContent>
                        <FaShoppingCart size={20} color="#FFF" />
                     </IconContent>
                     
                     <BoxGroup>
                        <span>0</span>
                     </BoxGroup>
                  </BoxChard>

                  <BoxChard>
                     <IconContent>
                        <FaArchive size={20} color="#FFF" />
                     </IconContent>
                     {/* <BoxGroup>
                        <IconContentText>Pedidos</IconContentText>
                     </BoxGroup> */}
                  </BoxChard>
               </BoxInfo>
            </div>
         </Content>
      </Container>
   )
}

export default HeaderContent;