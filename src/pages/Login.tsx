import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../../config/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import styled from 'styled-components';
import { Mail, Lock } from 'react-feather';
import InputField from "../components/InputField";
import ButtonField from "../components/ButtonField";

//interface que vai definir as props que vão atualizar o estado de autenticação
interface LoginProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setIsAuthenticated(true);

      if (auth.currentUser?.email) {
        const userEmail = auth.currentUser.email;
        const userUsername = userEmail.split("@")[0];
        navigate("/Home", { state: { username: userUsername } });
      }
    } catch (err: any) {
      if (isSignUp) {
        setError("Erro ao criar conta. Verifique suas informações.");
        console.error("Erro ao criar conta:", err);
      } else {
        setError("Email ou senha inválidos. Tente novamente.");
        console.error("Erro ao fazer login:", err);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true);

      if (auth.currentUser?.email) {
        const userEmail = auth.currentUser.email;
        const userUsername = userEmail.split("@")[0];
        navigate("/Home", { state: { username: userUsername } });
      }
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      setError("Erro ao fazer login com o Google. Tente novamente.");
    }
  };

  return (
    <LoginPage>
      <TextHeader>
        <h1>Audio</h1>
        <h2>It's modular and designed to last</h2>
      </TextHeader>

      <LoginForm onSubmit={handleEmailSignIn}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon= {<Mail className="icon" size={20} />}
        />
        
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon= {<Lock className="icon" size={20} />}
        />

        {!isSignUp && <ForgotPasswordLink>Forgot Password</ForgotPasswordLink>}

        <ButtonField typeButton="submit" text="Login" />

        <GoogleButton onClick={handleGoogleSignIn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Icon" />
          Sign in with Google
        </GoogleButton>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginForm>

      <SignUpText>
        {isSignUp ? (
          <>If you have an account? <a onClick={() => setIsSignUp(false)}>Sign In here</a></>
        ) : (
          <>Didn’t have any account? <a onClick={() => setIsSignUp(true)}>Sign Up here</a></>
        )}
      </SignUpText>
    </LoginPage>
  );
};

export default Login;

// Styled Components

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
    url('/src/images/background.png') center/cover no-repeat;
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

