import styled from 'styled-components';

interface Props {
   disabled: boolean
}

export const Container = styled.div`
   visibility : ${(p: Props) => p.disabled ? 'hidden': 'visible'};
   position: absolute;
   top: 60%;
   right: 10%;
   z-index: 999;
`

export const Content = styled.div`
   width: 300px;
   height: auto;

   -webkit-box-shadow: 2px 5px 16px 0px #DDD, -1px -34px 34px -13px rgba(0,0,0,0); 
   box-shadow: 2px 5px 16px 0px #DDD, -1px -34px 34px -13px rgba(0,0,0,0);
   background: #FFF;
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
      background: #E6704B;
      padding: 4px;
      border-radius: 5px;
      margin: 4px;
   }

   #add {
      background: #6A983C;
      padding: 4px;
      border-radius: 5px;
      margin: 4px;
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