import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;

   input{
      width: 98%;
      background: #F9F9F9;
      border: .5px solid #D1D1D1;
      box-sizing: border-box;
      border-radius: 12px;
      height: 40px;
      outline: 0;
      padding-left: 10px;
   }

   label{
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      /* identical to box height */
      /* margin: auto; */

      /* C1/A */

      color: #151515;
   }
`