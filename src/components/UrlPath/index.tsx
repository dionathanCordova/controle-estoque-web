import React from 'react';

import { Container, Content, UrlInfo } from './styles';

interface UrlProps {
   url: string;
}

const UrlPath: React.FC<UrlProps> = ({url}) => {
  return(
     <Container>
        <Content>
            <UrlInfo>{url}</UrlInfo>
        </Content>
     </Container>
  );
}

export default UrlPath;