import React from 'react';

import { ContainerEnderecos } from './styles';

const enderecos = [
   {
      'CEP': '888330-000',
      'RUA': 'ALFA DA SILVA',
      'CIDADE': 'CAMBORIU',
      "ESTADO": "SANTA CATARINA",
      "TITULO": "CASA DE PRAIA",
      "COMPLEMENTO": "AP 302"
   },
   {
      'CEP': '888330-000',
      'RUA': 'ALFA DA SILVA',
      'CIDADE': 'CAMBORIU',
      "ESTADO": "SANTA CATARINA",
      "TITULO": "CASA DE PRAIA",
      "COMPLEMENTO": "AP 302"
   },
   {
      'CEP': '888330-000',
      'RUA': 'ALFA DA SILVA',
      'CIDADE': 'CAMBORIU',
      "ESTADO": "SANTA CATARINA",
      "TITULO": "CASA DE PRAIA",
      "COMPLEMENTO": "AP 302"
   },
   {
      'CEP': '888330-000',
      'RUA': 'ALFA DA SILVA',
      'CIDADE': 'CAMBORIU',
      "ESTADO": "SANTA CATARINA",
      "TITULO": "CASA DE PRAIA",
      "COMPLEMENTO": "AP 302"
   },
   {
      'CEP': '888330-000',
      'RUA': 'ALFA DA SILVA',
      'CIDADE': 'CAMBORIU',
      "ESTADO": "SANTA CATARINA",
      "TITULO": "CASA DE PRAIA",
      "COMPLEMENTO": "AP 302"
   }
]

const Endereco: React.FC = () => {
   return (
      <ContainerEnderecos>
         {enderecos.length === 0 && (
            <div id="content">
               <h4>Nenhum endereço cadastrado</h4>
            </div>
         )}

         <div id="contentEnderecos">
            {enderecos.map(endereco => (
               <div id="card">
                  teste
               </div>
            ))}
         </div>
      </ContainerEnderecos>
   );
}

export default Endereco;