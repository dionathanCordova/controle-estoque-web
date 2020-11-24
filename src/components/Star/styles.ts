import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Content = styled.div`
   display: flex;
   flex-direction: row;

   img{
      padding: 2px;
      width: 20px;

      @media only screen and (max-width: 830px) {
         width: 30px;
         margin-top: 10px;
      }
   }

`