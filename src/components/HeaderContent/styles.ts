import styled from 'styled-components';

export const Container = styled.div`
   padding-top: 20px;
   padding-bottom: 15px;
   background: #00263d;
   border-radius: 0 0 30px 30px;
   position: relative;
   height: 135px;
   border-bottom: 1px solid #ccc;
   box-shadow: 0px 2px 6px rgba(100, 100, 100, 0.2);

   align-items:center;
   display:flex;
`
export const Content = styled.div`
   width:80%;
   margin : auto;

   .main{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center;
   }

   img{
      width: 16%;
      margin-right: 20px;

      @media only screen and (max-width: 830px) {
         width: 36%;
      }

   }

`

export const BoxSearch = styled.div`
   @media only screen and (max-width: 830px) {
      display: none
   }

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
   }

   input {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
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

export const BoxInfo = styled.div`
   height: auto;
   display: flex;
   flex-direction: row;
`
export const BoxChard = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`

export const BoxGroup = styled.div`
   display: flex;
   flex-direction: column;
   align-items:flex-start;
   line-height: 18px;

   margin-left: 5px;

   span{
      color: #c8e455;
      font-size: 14px;
   }
`

export const IconContent = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background: #c8e455;

   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 20px;
`
export const IconContentText = styled.p`
   color: #FFF;
   font-size: 12px;
`

export const Popup = styled.div`
   margin-left: 20px;
   background: #FFF;
   width: 100px;
   height: 40px;
   border-radius: 5px;
   position: absolute;
   top: 2px;
   display: flex;
   align-items: center;
   justify-content: center;
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