import styled from 'styled-components';

export const Container = styled.div`
   width: 100vw;
   height: auto;
   background: #000000;
`

export const Content = styled.div`
   .main{
      padding-top: 40px;
      margin:auto;
      width: 70vw;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      ul {
         list-style-type: none;
      }

      @media only screen and (max-width: 830px) {
         flex-direction: column;
         align-items: center;
      }
   }

   .comprando{
      width: 20vw;

      @media only screen and (max-width: 830px) {
         width: 40vw;
         text-align: center;
         margin: 10px;
      }
   }

   .institucional{
      width: 20vw;

      @media only screen and (max-width: 830px) {
         width: 40vw;
         text-align: center;
         margin: 10px;
      }
   }

   .atendimento {
      width: 20vw;
      border-right: 1px solid #CCC;
      @media only screen and (max-width: 830px) {
         width: 40vw;
         text-align: center;
         margin: 10px;
         border: 0;
      }
   }

   .newletter{
      width: 40vw;
      padding-left: 20px;

      .boxemail {
         width: 20vw;
         height: 40px;
         display: flex;

         input {
            width: 20vw;
            height: 40px;
            border-radius: 6px 0 0 6px  ;
         
            font-size: 12px;
            padding-left: 10px;
            border: 0;
            outline: 0;

            ::placeholder{
               color: #BBBBBB;
            }
         }

         button{
            padding: 10px;
            height: 40px;
            border: 0;
            background: #c8e455;
            font-size: 15px;
            color: #FFF;
            transition: background 0.3s;

            border-radius: 0 6px 6px 0;

            :hover{
               background: #6ac046
            }
         }
      }

      .media{
         margin-top: 20px;
         margin-bottom: 20px;

         svg {
            margin-right: 20px;

            :hover{
               cursor: pointer;
            }
         }
      }

      @media only screen and (max-width: 830px) {
         width: 80vw;
         text-align: center;
         margin: 10px;
         border: 0;
        
         .boxemail {
            width: 72vw;
            height: 40px;

            input {
               width: 100vw;
            }
         }
      }
   }
`

export const Title = styled.h3`
   color: #a7a4a1;
   font-size: 16px;
`

export const Link = styled.a`
   color: #cbc8c5;
   font-size: 14px;
   cursor: pointer;
`

export const Subfooter = styled.div`
   background: #FFF;
   margin:auto;
   width: 100vw;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   .payment{
      padding: 20px;
      
      svg{
         margin: 10px;
      }
   }
`
export const CompanyInfo = styled.div`
   background: #FFF;
   margin:auto;
   width: 100vw;

   border-top: 1px solid #e6e6e6;
   text-align: center;

   color: #96938f;

   p{
      opacity: 0.7;
      font-size: 15px;
      width: 55vw;
      text-align: center;
      margin: auto;
      margin-top: 40px;
      padding-bottom: 40px;
   }
`