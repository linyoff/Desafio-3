import styled from 'styled-components';
import img from '../../images/background.png';

const LoginPage = styled.div`
  display: flex;
  font-weight: 600;
  letter-spacing: 0.03rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--colorsWhite);
  min-height: 100vh;
  background: linear-gradient(rgba(18, 80, 56, 1), rgba(22, 199, 130, 0)),
    url(${img}) center/cover no-repeat;
`;

const TextHeader = styled.div`
  margin-bottom: 35px;

  h1 {
    letter-spacing: 0.04rem;
    font-size: 3.19rem;
  }

  h2 {
    letter-spacing: 0.04rem;
    font-size: 0.8rem;
    line-height: 25px;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 360px;
  margin: 50px 0;
`;


const ForgotPasswordLink = styled.a`
  text-decoration: none;
  margin-top: 10px;
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 15px;
  background-color: transparent;
  color: var(--colorsWhite);
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;

  img {
    width: 25px;
    height: 25px;
  }
`;

const ErrorMessage = styled.p`
  margin: 0;
  background-color: var(--colorsGrey);
  color: var(--colorError);
`;

const SignUpText = styled.p`
  margin-top: 30px;
  font-size: 0.9rem;

  a {
    color: var(--colorsGreen);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyleLogin = {
    LoginPage,
    TextHeader,
    LoginForm,
    ForgotPasswordLink,
    GoogleButton,
    ErrorMessage,
    SignUpText
}