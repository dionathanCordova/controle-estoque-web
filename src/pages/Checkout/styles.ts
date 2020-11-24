import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
   width: 100%;
   height: auto;

   main{
      width: 80%;
      margin: auto;

      display: flex;
      flex-direction: row;

      @media only screen and (max-width: 830px) {
         flex-direction: column;
      }
   }
`

export const ContainerLeft = styled.div`
    background: #FFFFFF;
   border: 1px solid #D1D1D1;
   box-sizing: border-box;
   border-radius: 12px;

   margin-right: 10px; 

   width: 70vw;

   #title {
      padding: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      color: #151515;
   }

   @media only screen and (max-width: 830px) {
      margin: auto;
      width: 100%;
   }
`

export const ContainerRight = styled.div`
   width: 30vw;

   background: #FFFFFF;
   border: 1px solid #D1D1D1;
   box-sizing: border-box;
   border-radius: 12px;

   #title {
      padding: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      color: #151515;
   }

   #subtitle{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #A9A9A9;
      padding: 10px;
   }

   @media only screen and (max-width: 830px) {
      margin: auto;
      margin-top: 20px;
      width: 100%;
   }
`

export const ChartContent = styled.div`
   padding: 10px;
   display: flex;
   flex-direction: column;
`

export const BoxProduct = styled.div`
  

   margin-bottom: 10px;

   #prodInfo {
      display: flex;
      flex-direction: row;
    
      #contentImage {
         width: 40%;
         height: 100px;

         img{
            padding-left: 20px;
            max-width: 80%;

            @media only screen and (max-width: 830px) {
               margin-top: 10px;
               padding-left: 10px;
               max-width: 100%;
            }
         }
      }

      #contentInfo{
         padding: 20px;
         width: 100%;
         height: 100px;
      }
   }

   #prodCost {
      display: flex;
      flex-direction: row;

      #contentQtd {
         width: 40%;
         background: yellow;
      }

      #contentPrice{
         width: 100%;
         background: purple;
      }
   }
`

export const ProductMarca = styled.p`
   color: #A9A9A9;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
`

export const ContentValue = styled.div`
   display:flex;
   flex-direction:row;
   justify-content: space-between;
   width:100%;

   @media only screen and (max-width: 830px) {
      flex-direction: column;
   }
`

export const QuantityContent = styled.div`
   background: #f9f9f9;
   width: 110px;
   border: 1px solid #d1d1d1;
   height: 30px;

   @media only screen and (max-width: 830px) {
      margin: auto;
   }

   display: flex;
   flex-direction: row;
   align-items: center;
   border-radius: 10px;
   margin-top:8px;

   #qtd {
      border-right: 1px solid #d1d1d1;
      padding: 5px 10px;
      color: #d1d1d1;
   }

   #remove {
      background: #d1d1d1;
      padding: 4px;
      border-radius: 5px;
      margin: 4px;
      transition: background 0.2s;

      :hover{
         background: ${shade(0.3, '#e33c28')}
      }
   }

   #add {
      background: #d1d1d1;
      padding: 4px;
      border-radius: 5px;
      margin: 4px;

      transition: background 0.2s;

      :hover{
         background: ${shade(0.3, '#6A983C')}
      }
   }
`
export const Price = styled.div`
   color: #6A983C;
   font-family: sans-serif;
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   padding: 10px;

   span{
      font-size: 10px;
   }

   @media only screen and (max-width: 830px) {
      margin: auto;
      font-size: 25px;

      span{
         font-size: 15px;
      }
   }
`

export const HeaderStep = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   p{
      margin-right: 10px;
      color: #d1d1d1;
      font-size: 14px;
   }
`

export const FooterStep = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   button{
      background: #FFF;
      border: 1px solid #d1d1d1;
      padding: 10px;
      border-radius: 5px;
      margin: 0 10px;
      color: #000;
      font-size: 14px;
      outline: 0;
      margin-bottom: 10px;

      transition: background 0.2s;

      :hover{
         background: #6A983C;
         color: #FFF;
      }
   }
`

