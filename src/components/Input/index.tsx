import React from 'react';

import { Container } from './styles';

interface InputProps {
   label: string;
   name: string;
   type: string;
   className: string;
}

const Input: React.FC<InputProps> = ({label, name, type, className}) => {
  return (
     <Container>
        <label htmlFor="">{label}</label>
        <input className={className} type={type} name={name} id={name}/>
     </Container>
  );
}

export default Input;