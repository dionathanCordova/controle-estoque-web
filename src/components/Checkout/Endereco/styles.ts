import styled from 'styled-components';

export const Container = styled.div`
`

export const Content = styled.div`
   display:flex;
   flex-direction: column;

   #header{
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 100%;

      button{
         background: #FFF;
         border: 1px solid #d1d1d1;
         padding: 10px;
         border-radius: 5px;
         margin: 10px 0px 10px 10px;
         color: #000;
         font-size: 14px;
         outline: 0;

         transition: background 0.2s;

         :hover{
            background: #6A983C;
            color: #FFF;
         }
      }
   }

   #body{
      width: 100%;
      margin: 10px;
   }
`
export const ContainerCadastro = styled.div`

   .grid {
      display: grid;
      margin-right: 20px;
   }

   .grid-template-columns {
      grid-template-columns: 50% 50%;

      @media only screen and (max-width: 830px) {
         grid-template-columns: 1fr;
      }
   }

   .item {
      margin: 10px 3px;
   }

`

export const ContainerEnderecos = styled.div`
   width: 98%;

   #contentEmpty {
      display: flex;
      align-items:center;
      margin: auto;
      flex-direction: column;

      h4 {
         margin: 10px;
      }
   }

   #contentEnderecos {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      #card {
         width: 300px;
         height: 150px;
         border: 1px solid #d1d1d1;
         padding: 10px;
         margin: 20px;
         border-radius: 4px;
         cursor: pointer;

         transition: background 0.2s;

         :hover{
            background: #d1d1d1;
         }
      }
   }
`