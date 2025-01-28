import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../../config/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Mail, Lock } from 'react-feather';
import { StyleLogin } from "../styles/pages/login-styles";
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
        navigate("/home", { state: { username: userUsername } });
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
        navigate("/home", { state: { username: userUsername } });
      }
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      setError("Erro ao fazer login com o Google. Tente novamente.");
    }
  };

  return (
    <StyleLogin.LoginPage>
      <StyleLogin.TextHeader>
        <h1>Audio</h1>
        <h2>It's modular and designed to last</h2>
      </StyleLogin.TextHeader>

      <StyleLogin.LoginForm onSubmit={handleEmailSignIn}>
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

        {!isSignUp && <StyleLogin.ForgotPasswordLink>Forgot Password</StyleLogin.ForgotPasswordLink>}

        <ButtonField typeButton="submit" text="Login" />

        <StyleLogin.GoogleButton onClick={handleGoogleSignIn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Icon" />
          Sign in with Google
        </StyleLogin.GoogleButton>

        {error && <StyleLogin.ErrorMessage>{error}</StyleLogin.ErrorMessage>}
      </StyleLogin.LoginForm>

      <StyleLogin.SignUpText>
        {isSignUp ? (
          <>If you have an account? <a onClick={() => setIsSignUp(false)}>Sign In here</a></>
        ) : (
          <>Didn’t have any account? <a onClick={() => setIsSignUp(true)}>Sign Up here</a></>
        )}
      </StyleLogin.SignUpText>
    </StyleLogin.LoginPage>
  );
};

export default Login;

