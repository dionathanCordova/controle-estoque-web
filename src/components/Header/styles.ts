import styled from 'styled-components';

export const Container = styled.div`
   width: 100vw;
   height: 50px;
   background: #FFF;


   @media only screen and (max-width: 1030px) {
      height: 90px;
   }

   @media only screen and (max-width: 830px) {
      height: 105px;
      display:none;
   }
`

export const Content = styled.div`
   width: 80%;
   border-bottom: 1px solid #f3f3f3;
   margin:auto;

   display: flex;
   flex-direction: row;
   justify-content:space-between;
`

export const ContentGroup = styled.div`
   display: flex;
   flex-direction: row;
   padding: 10px;
`

export const Link = styled.a`
   font-size: 12px;
   margin-left: 10px;
   cursor: pointer;

   &:hover{
      color: #DDD;
   }
`

export const Button = styled.button`
   background-color: #00263d;
   height: auto;
   color: white;
   border-radius: 25px;
   font-size: 12px;
   padding: 0 20px 0 20px;
   margin: 0 10px 0 10px;
   box-shadow: unset;

   display: flex;
   align-items:center;
   outline: 0;

   transition: background 0.2s;

   &:hover{
      background: #DDD;
   }
`

export const ButtonText = styled.p`
   margin-left: 4px;
  
`