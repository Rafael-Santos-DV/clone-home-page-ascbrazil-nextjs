import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  padding: 25px;
  background-color: #fff;
  box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  line-height: 1.5;
  transition: transform 200ms ease;

  > img {
    max-width: 30px;
  }

  strong {
    font-size: 0.9rem;
    font-weight: 400;
  }

  > p {
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-2%);
  }
`;

export const BoxAuthor = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  > img {
    width: 50px;
    height: 50px;
  }
`;

export const BoxInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  strong:nth-of-type(1) {
    font-weight: bold;
  }
`;
