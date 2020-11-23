import React, { useContext } from 'react';

import { FaPlus, FaMinus, FaWindowClose } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Context from '../../contexts';

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
   Select,
   BtnContainerFooter,
   ButtonFooterCart,
   ButtonFooterCheckout,
   SubTotal,
   BoxSubtotal
} from './styles';

const Cart: React.FC = () => {
   const history = useHistory();
   const {ToggleCart, disabledCart} = useContext(Context);

   const roupas = [
      {
         'descricao': 'Camiseta Azul - 100% Algodão - Lisa',
         'preco': 16.95,
         'marca': 'Algo',
         'imagePath': 'https://http2.mlstatic.com/D_NQ_NP_639305-MLB42948410314_072020-O.webp'
      },
      {
         'descricao': 'Camiseta com estampa Gucci',
         'preco': 2.290,
         'marca': 'GUCCI',
         'imagePath': 'https://cdn-images.farfetch-contents.com/12/41/63/18/12416318_11308944_480.jpg'
      },
      {
         'descricao': 'Camiseta Fitness S.a Suplementos',
         'preco': 29.99,
         'marca': 'Algo',
         'imagePath': 'https://http2.mlstatic.com/D_NQ_NP_728186-MLB40262583917_122019-O.webp'
      }
   ]

   let subtotal = 0;
   roupas.forEach(element => {
      subtotal += element.preco
   });

   function handleRedirectPage(page: string) {
      ToggleCart();
      history.push(page);
   }

   return (
      <Container disabled={disabledCart}>
         <Content>
            <div className="headerCar">
               <CartTitle>Carrinho</CartTitle>
               <button onClick={ToggleCart}>
                  <FaWindowClose size={22} color="#000"/>
               </button>
            </div>
            
            {roupas.map((prod) => {
               return(
                  <BoxProduct key={prod.descricao}>
                     <ContentInfo>
                        <ImageContent>
                           <img src={prod.imagePath} alt=""/>
                        </ImageContent>
                        <BoxPrimary>
                           <ProductTitle>{prod.descricao}</ProductTitle>
                           <ProductMarca>Marca: {prod.marca}</ProductMarca>
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
                        <Price>
                           <span>R$</span> {prod.preco }
                        </Price>
                     </ContentValue>
                  </BoxProduct>
               )
            })}

            <BoxSubtotal>
               <p id="title">Subtotal</p> 
               <SubTotal> <span>R$</span> {subtotal}</SubTotal>
            </BoxSubtotal>

            <BtnContainerFooter>
               <ButtonFooterCheckout onClick={() => handleRedirectPage('/checkout')}>
                  <p>Finalizar compra</p>
               </ButtonFooterCheckout>
            </BtnContainerFooter>
         </Content>
      </Container>
   );
}

export default Cart;