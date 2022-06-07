import React from 'react';
import { BoxAuthor, BoxInformation, Container } from './style';
import quote from '../../assets/quote.svg';

type CardFeedbackTypes = {
  avatar: string;
  author: string;
  charge: string;
  description: string;
  content: string;
};

export const CardFeedback: React.FC<CardFeedbackTypes> = ({
  description,
  content,
  author,
  avatar,
  charge,
}) => {
  return (
    <Container>
      <img src={quote.src} alt="Quote" />
      <strong>{description}</strong>
      <p>{content}</p>

      <BoxAuthor>
        <img src={avatar} alt={author} />

        <BoxInformation>
          <strong>{author}</strong>
          <strong>{charge}</strong>
        </BoxInformation>
      </BoxAuthor>
    </Container>
  );
};
