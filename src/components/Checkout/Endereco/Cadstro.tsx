import React from 'react';

import { ContainerCadastro } from './styles';

import Input from '../../Input';

const Endereco: React.FC = () => {
   return (
      <ContainerCadastro>
         <div>
            <section className="container grid grid-template-columns">
               <Input className="item" name="CEP" type="text" label="CEP" />
               <Input className="item" name="rua" type="text" label="Rua" />
               <Input className="item" name="numero" type="text" label="Numero" />
               <Input className="item" name="cidade" type="text" label="Cidade" />
               <Input className="item" name="estado" type="text" label="Estado" />
               <Input className="item" name="complemento" type="text" label="Complemento" />
            </section>
         </div>
      </ContainerCadastro>
   );
}

export default Endereco;