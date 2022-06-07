import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 20px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.backgroundButton};
  cursor: pointer;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: background 200ms ease-in-out;

  a {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.backgroundButton};
    font-weight: '400';
    transition: color 200ms ease-in-out;
  }

  &:hover {
    background: ${(props) => props.theme.colors.backgroundButton};

    a {
      color: #ffffff;
    }
  }
`;
