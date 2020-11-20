import styled from 'styled-components';
import { shade } from 'polished';

interface Props {
   disabled: boolean
}

export const Container = styled.div`
   visibility : ${(p: Props) => p.disabled ? 'hidden': 'visible'};
   position: absolute;
   top: 70%;
   right: 10%;
   z-index: 999;
`

export const Content = styled.div`
   width: 400px;
   height: auto;

   -webkit-box-shadow: 2px 5px 16px 0px #DDD, -1px -34px 34px -13px rgba(0,0,0,0); 
   box-shadow: 2px 5px 16px 0px #DDD, -1px -34px 34px -13px rgba(0,0,0,0);
   background: #FFF;

   .headerCar{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      button{
         background: none;
         border: 0;
         outline: 0;
      }
      svg{
         margin-right: 20px;
      }
   }
`

export const CartTitle = styled.p`
   color: #151515;
   font-style: normal;
   font-weight: 600;
   font-size: 26px;
   line-height: 39px;
   padding: 10px;
`

export const BoxProduct = styled.div`
   height: auto;
   margin: 15px;
   display: flex;
   flex-direction: column;
`

export const BoxPrimary = styled.div`
   display: flex;
   flex-direction: column;
`

export const ImageContent = styled.div`
   width: 100px;
   height: 90px;
   background: #CCC;
   margin-bottom: 34px;

   img{
      width: 100%;
   }
   
`

export const ContentValue = styled.div`
   display:flex;
   flex-direction:row;
   justify-content: space-between;
`

export const ContentInfo = styled.div`
   display:flex;
   flex-direction:row;
`

export const ProductTitle = styled.div`
   color: #151515;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   padding: 10px;
`

export const ProductMarca = styled.p`
   color: #A9A9A9;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   padding: 0px 10px 0 ;
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
`

export const QuantityContent = styled.div`
   background: #f9f9f9;
   width: 110px;
   border: 1px solid #d1d1d1;
   height: 30px;

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
      background: #e33c28;
      padding: 4px;
      border-radius: 5px;
      margin: 4px;
      transition: background 0.2s;

      :hover{
         background: ${shade(0.3, '#e33c28')}
      }
   }

   #add {
      background: #6A983C;
      padding: 4px;
      border-radius: 5px;
      margin: 4px;

      transition: background 0.2s;

      :hover{
         background: ${shade(0.3, '#6A983C')}
      }
   }
`

export const Select = styled.select`
   background: #FFF;
   border-radius: 2em;
   border: 0;
   outline: 0;
   width: 70px;
   padding-left: 10px;
   color: #172B4D;
   display: 'inline-block';
   font-size: 12px;
   font-weight: 'normal';
   line-height: '1';
   min-width: 4;
   padding: '3.16666666666667em 0.5em';
   text-align: 'center';
   font-weight: bold;

`

export const BoxSubtotal = styled.div`
   display:flex;
   justify-content:space-between;
   align-items: center;

   p{
      padding-left: 20px;
   }
`
export const BtnContainerFooter = styled.div`
   height:70px;
   padding-bottom: 20px;
`

export const ButtonFooterCart = styled.button`
   background: #333;
   color: #FFF;
   width: 190px;
   border: 0;
   border-radius: 10px;
   margin: 5px;
   outline: 0;
   transition: background 0.2s;

   :hover{
      background: ${shade(0.2, '#d1d1d1')}
   }

   p{
      padding: 15px;
   }

`

export const ButtonFooterCheckout = styled.button`
   background: #6A983C;
   color: #FFF;
   width: 190px;
   border: 0;
   border-radius: 10px;
   margin: 5px;
   outline: 0;
   transition: background 0.2s;

   :hover{
      background: ${shade(0.2, '#6A983C')}
   }

   p{
      padding: 15px;
  }

`

export const SubTotal = styled.p`
   color: #6A983C;
   font-family: sans-serif;
   font-style: normal;
   font-weight: 800;
   font-size: 22px;
   padding: 10px;
`

