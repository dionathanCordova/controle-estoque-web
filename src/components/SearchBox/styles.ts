import styled from 'styled-components';

export const Container = styled.div`
   width: 100vw;
   height: 40px;
   margin-top: 10px;
   display:none;

   @media only screen and (max-width: 830px) {
      display: block
   }
`

export const BoxSearch = styled.div`
   @media only screen and (max-width: 830px) {
      margin: auto;
      margin-top: 20px;
      width: 100%;
   }

   margin: auto;
   background: #ffffff;
   border: 1px solid #d1d1d1;
   height: 40px;
   width: 420px;
   border-radius: 10px;

   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   position: relative;

   #categoria {
      font-weight: 800;
      width: 100%;
      border:0;
      background:red;
   }

   input {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;

      border: 0;
      border-left: 1px solid #d1d1d1;
      padding-left: 20px;
      outline: 0;
      width: 300px;
   }

   label {
      position: absolute;
      right: 0;
      margin-right: 20px;
   }
`

export const Select = styled.select`
   background: #FFF;
   border-radius: 2em;
   border: 0;
   outline: 0;
   width: 35%;
   padding-left: 10px;
   margin-right: 10px;
   color: #172B4D;
   display: 'inline-block';
   font-size: 12px;
   font-weight: 'normal';
   line-height: '1';
   min-width: 4;
   padding: '3.16666666666667em 0.5em';
   text-align: 'center';
`