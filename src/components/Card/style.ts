import styled from 'styled-components';

export const BoxCard = styled.div`
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 20px;
  transition: transform 200ms ease;

  background-image: linear-gradient(to bottom right, #ffffff, #f2f2f2 50%);

  img {
    max-width: 40px;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media only screen and (max-width: 990px) {
    padding: 20px;
    gap: 10px;

    img {
      max-width: 35px;
      padding-top: 15px;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;
