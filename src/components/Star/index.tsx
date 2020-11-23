import React, { useCallback, useState } from 'react';

import StarIcon from '../../assets/star.svg';
import SilverStart from '../../assets/silverStar.svg';

import { 
   Container,
   Content
} from './styles';

const Start: React.FC = () => {

   const [votoStar, setVotoStart] = useState(0);

   const [nivelStar, setNivelStar] = useState([
      {
         'GoldIcon': StarIcon, 
         'SilverIcon': SilverStart,
      },
      {
         'GoldIcon': StarIcon, 
         'SilverIcon': SilverStart,
      },
      {
         'GoldIcon': StarIcon, 
         'SilverIcon': SilverStart,
      },
      {
         'GoldIcon': StarIcon, 
         'SilverIcon': SilverStart,
      },
      {
         'GoldIcon': StarIcon, 
         'SilverIcon': SilverStart,
      },
   ])

   const handleChengeStar = useCallback((index: number) => {
      setVotoStart(index + 1);
   }, [])

   return (
      <Container>
         <Content>
            {nivelStar.map((star, index) => {
               return (
                  <img onClick={() => handleChengeStar(index)} src={votoStar <= index ? star.SilverIcon : star.GoldIcon} alt=""/>
               )
            })}
         </Content>
      </Container>
   );
}

export default Start;