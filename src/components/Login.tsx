import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../../config/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import '../syles/Login.css';
import { Mail, Lock } from 'react-feather';

//interface que vai definir as props q vão atualizar o estado de autenticação
interface LoginProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); //exibir mensagens de erro
  const navigate = useNavigate();

  //login com email e senha
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); //limpa mensagens de erro anteriores
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      navigate("/home");
    } catch (err: any) {
      setError("Email ou senha inválidos. Tente novamente.");
      console.error("Erro ao fazer login com email e senha:", err);
    }
  };

  //login com google
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      setError("Erro ao fazer login com o Google. Tente novamente.");
    }
  };

  return (
    <div className="login-page">

      <div className="text-header">
        <h1>Audio</h1>
        <h2>It's modular and designed to last</h2>
      </div>

      {/*form de login por email e senha*/}
      <form className="login-form" onSubmit={handleEmailSignIn}>
        <div className="input-container">
          <Mail className="icon" size={20} /> {/* Ícone de email */}
          <input
            className="input-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <Lock className="icon" size={20} /> {/* Ícone de senha */}
          <input
            className="input-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p>Forgot Password</p>
        <button className="login-button" type="submit">Sign In</button>

        {/*botão de login com google*/}
        <button className="google-button" onClick={handleGoogleSignIn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Icon" className="google-icon" /> {/* Ícone do Google */}
          Sign in with Google
        </button>

      </form>

      {error && <p className="error-message">{error}</p>} {/*mensagem de erro*/}

      <p className="signup-text">Didn’t have any account? <a>Sign Up here</a></p>

    </div>
  );
};

export default Login;
