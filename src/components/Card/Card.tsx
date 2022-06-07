import React from 'react';
import { BoxCard } from './style';

type CardType = {
  text: string;
  src: string;
  className?: string;
};

export const Card: React.FC<CardType> = ({ text, className, src }) => {
  return (
    <BoxCard className={className ? className : ''}>
      <img src={src} alt={text} />
      <span>{text}</span>
    </BoxCard>
  );
};
