import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import HeaderContent from '../../components/HeaderContent';
import SearchBox from '../../components/SearchBox';
import UrlPath from '../../components/UrlPath';
import Star from '../../components/Star';
import Endereco from '../../components/Checkout/Endereco';

import { 
   Container,
   ContainerLeft,
   ContainerRight,
   ChartContent,
   BoxProduct,
   ProductMarca,
   ContentValue,
   Price,
   QuantityContent,
   HeaderStep,
   FooterStep
} from './styles';

const Checkout: React.FC = () => {
   const [step, setStep] = useState(1);

   return (
      <Container>
         <Header />
         <HeaderContent />
         <SearchBox />
         <UrlPath url="Home / Pagamento"/>

         <main>
            <ContainerLeft>
               <HeaderStep>
                  <h3 id="title"> Endereço </h3>
                  <p>Step 1 / 5</p>
               </HeaderStep>

               {step === 1 && (
                  <Endereco />
               )}
               <FooterStep>
                  <button>Voltar</button>
                  <button>Próximo</button>
               </FooterStep>

            </ContainerLeft>
          
            <ContainerRight>
               <h3 id="title"> Sumario </h3>
               <p id="subtitle"> Os valores podem sofrer alteração conforme escolha de itens, frete e taxa de juros por parcelamento.</p>

               <ChartContent>
                  <BoxProduct>
                     <div id="prodInfo">
                        <div className="" id="contentImage">
                           <img src="https://http2.mlstatic.com/D_NQ_NP_728186-MLB40262583917_122019-O.webp" alt=""/>
                        </div>
                        <div className="" id="contentInfo">
                           <p>Camiseta Fitness S.a Suplementos</p>
                           <ProductMarca>Marca: Algo</ProductMarca> </div>
                     </div>

                     <div id="prodCost">
                        <ContentValue>
                           <QuantityContent>
                              <div id="qtd">
                                 2 x
                              </div>
                              <FaMinus id='remove' size={22} color="#FFF" />
                              <FaPlus id="add" size={22} color="#FFF" />
                           </QuantityContent>

                           <Star />

                           <Price>
                              <span>R$</span> 10
                           </Price>
                        </ContentValue>   
                     </div>
                  </BoxProduct>

                  <BoxProduct>
                     <div id="prodInfo">
                        <div className="" id="contentImage">
                           <img src="https://http2.mlstatic.com/D_NQ_NP_728186-MLB40262583917_122019-O.webp" alt=""/>
                        </div>
                        <div className="" id="contentInfo">
                           <p>Camiseta Fitness S.a Suplementos</p>
                           <ProductMarca>Marca: Algo</ProductMarca> </div>
                     </div>

                     <div id="prodCost">
                        <ContentValue>
                           <QuantityContent>
                              <div id="qtd">
                                 2 x
                              </div>
                              <FaMinus id='remove' size={22} color="#FFF" />
                              <FaPlus id="add" size={22} color="#FFF" />
                           </QuantityContent>

                           <Star />
                           <Price>
                              <span>R$</span> 10
                           </Price>
                        </ContentValue>   
                     </div>
                  </BoxProduct>
               </ChartContent>
            </ContainerRight>
         </main>
         <Footer />
      </Container>
   )
}

export default Checkout;