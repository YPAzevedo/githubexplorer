import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface InputProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
`;

export const Input = styled.input<InputProps>`
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  border-right: 0;

  ${(props) => props.hasError && css`
    border-color: #C53030;
  `}

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Button = styled.button`
  width: 210px;
  height: 70px;
  background: #04d361;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04D361')};
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  transition: transform 0.2s;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #C53030;
  margin-top: 8px;
`;
