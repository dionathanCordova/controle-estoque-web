import React from 'react';
import { FaShoppingCart, FaArchive, FaSearch } from 'react-icons/fa';

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
   return (
      <Container>
         <Content>
            <div className="main">
               <img src="https://www.agorasite.com.br/wp-content/uploads/2016/11/Portfolio-image.png" alt=""/>

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

               <BoxInfo>
                  <BoxChard>
                     <IconContent>
                        <FaShoppingCart size={20} color="#FFF" />
                     </IconContent>
                     
                     <BoxGroup>
                        <IconContentText>Carrinho</IconContentText>
                        <span>0 item</span>
                     </BoxGroup>
                  </BoxChard>

                  <BoxChard>
                     <IconContent>
                        <FaArchive size={20} color="#FFF" />
                     </IconContent>
                     <BoxGroup>
                        <IconContentText>Pedidos</IconContentText>
                     </BoxGroup>
                  </BoxChard>
               </BoxInfo>
            </div>
         </Content>
      </Container>
   )
}

export default HeaderContent;