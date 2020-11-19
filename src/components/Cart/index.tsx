import React, { useState } from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { 
   Container, 
   Content, 
   CartTitle, 
   BoxProduct, 
   BoxPrimary,
   ImageContent, 
   ContentValue,
   ProductTitle,
   ContentInfo,
   ProductMarca,
   Price,
   QuantityContent,
   Select
} from './styles';

interface CartProp {
   disabled: boolean;
}

const Cart: React.FC<CartProp> = ({disabled}: CartProp ) => {
   const [propDisabled, setDisabled] = useState(disabled);
   console.log(propDisabled);


   return (
      <Container disabled={disabled} onMouseOver={() => setDisabled(false)} onMouseLeave={() => setDisabled(true)}>
         <Content>
            <CartTitle>Carrinho</CartTitle>
            
            <BoxProduct>
               <ContentInfo>
                  <ImageContent></ImageContent>
                  <BoxPrimary>
                     <ProductTitle>SPI BLOCK 63 CÁPSULAS</ProductTitle>
                     <ProductMarca>Marca: teste</ProductMarca>
                  </BoxPrimary>
               </ContentInfo>

               <ContentValue>
                  <QuantityContent>
                     <div id="qtd">
                        2 x
                     </div>
                     <FaMinus id='remove' size={22} color="#FFF" />
                     <FaPlus id="add" size={22} color="#FFF" />
                  </QuantityContent>
                  <Price>R$ 15.00</Price>
               </ContentValue>
            </BoxProduct>

            <BoxProduct>
               <ContentInfo>
                  <ImageContent></ImageContent>
                  <BoxPrimary>
                     <ProductTitle>SPI BLOCK 63 CÁPSULAS</ProductTitle>
                     <ProductMarca>Marca: teste</ProductMarca>
                  </BoxPrimary>
               </ContentInfo>

               <ContentValue>
                  <QuantityContent>
                     <div id="qtd">
                        2 x
                     </div>
                     <FaMinus id='remove' size={22} color="#FFF" />
                     <FaPlus id="add" size={22} color="#FFF" />
                  </QuantityContent>
                  <Price>R$ 15.00</Price>
               </ContentValue>
            </BoxProduct>
         </Content>
      </Container>
   );
}

export default Cart;