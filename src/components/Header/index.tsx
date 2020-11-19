import React from 'react';
import { FaUsers, FaSignOutAlt, FaUser } from 'react-icons/fa';

import {
   Container,
   Content,
   ContentGroup,
   Link,
   Button,
   ButtonText
} from './styles';

const Header: React.FC = () => {
   return (
      <Container>
         <Content>
            <ContentGroup>
               <FaUser size={12} />
               <Link> Olá usuário, seja bem vindo. </Link>
            </ContentGroup>

            <ContentGroup>
               <Link> Institucional </Link>
               <Link> Empreender </Link>
               <Link> FAQ </Link>
            </ContentGroup>

            <ContentGroup>
               <Button> 
                  <FaUsers size={13} color="#FFF"/>  
                  <ButtonText>Area do usuário</ButtonText>
               </Button>
               
               <Button>
                  <FaSignOutAlt size={13} color="#FFF"/>  
                  <ButtonText>Sair</ButtonText> 
               </Button>
            </ContentGroup>

         </Content>
      </Container>
   );
}

export default Header;