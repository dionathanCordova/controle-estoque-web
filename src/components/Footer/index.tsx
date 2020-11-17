import React from 'react';
import { FaMobile, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { Container, Content, Title, Link, Subfooter, CompanyInfo } from './styles';

const Footer: React.FC = () => {
   return (
      <Container>
         <Content>
            <div className="main">
               <div className="comprando">
                  <Title>Comprando</Title>

                  <ul>
                     <li><Link>Segurança</Link></li>
                     <li><Link>Termo de uso</Link></li>
                     <li><Link>Política de troca e devolução</Link></li>
                     <li><Link>Política de privacidade</Link></li>
                  </ul>
               </div>

               <div className="institucional">
                  <Title>Institucional</Title>
                  <ul>
                     <li><Link>Sobre nós</Link></li>
                     <li><Link>Contato</Link></li>
                  </ul>
               </div>

               <div className="atendimento">
                  <Title>Atendimento</Title>
                  <ul>
                     <li><Link>Minha conta</Link></li>
                     <li><Link>Meus pedidos</Link></li>
                     <li><Link>Perguntas frequentes</Link></li>
                     <li>
                        <Link>
                           <p className="phone">
                              <FaMobile size={12} color="#FFF"/>
                              (65) 3041-2000
                           </p>
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className="newletter">
                  <Title>Assine nossa newsletter:</Title>

                  <div className="boxemail">
                     <input type="text" placeholder="Seu email"/>
                     <button type="button">Enviar</button>
                  </div>

                  <div className="media">
                     <FaInstagram size={30} color="#FFF"/>
                     <FaFacebook  size={30} color="#FFF"/>
                     <FaTwitter  size={30} color="#FFF"/>
                     <FaYoutube  size={30} color="#FFF"/>
                  </div>
               </div>
            </div>

            <Subfooter>
               <div className="payment">
                  <FaCcVisa size={45} color="#000"/>
                  <FaCcMastercard size={45} color="#000"/>
               </div>
            </Subfooter>


            <CompanyInfo>
               <p>
                  ECOMERCE NEGÓCIOS LTDA | CNPJ: xx.xxx.xxx/0001-xx | Inscrição Estadual: xx.xxx.xxx-x
                  Endereço: Edifício Ecomence Tower Sala 1, Av. Ecomence Negócios, 01 - Área comercial, SC, 88330-000
                  ECOMERCE | Todos os direitos reservados 2020</p>
            </CompanyInfo>
         </Content>
      </Container>
   )
}

export default Footer;