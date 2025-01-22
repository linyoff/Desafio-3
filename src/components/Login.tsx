import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../../config/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import '../syles/Login.css';
import { Mail, Lock } from 'react-feather';

//interface que vai definir as props q vao atualizar o estado de autenticação
interface LoginProps {
  //recebe o gerenciador de estado
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

//criação do component funcional FC que recebe as props declaradas antes
//desestruturação das props para acessar diretamente a função
const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {

  //variaveis de gerenciamento de estado
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); //exibir mensagens de erro
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const navigate = useNavigate();

  //login com email e senha usando função assincrona
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); //evita o evento de recarregar a pag
    setError(null); //limpa mensagens de erro anteriores
    try {
      if (isSignUp) {
        //chama funcao para criar o usuario
        await createUserWithEmailAndPassword(auth, email, password);
        setIsAuthenticated(true);//muda o estado
        navigate("/home");

      } else {
        //chamando a função de login
        await signInWithEmailAndPassword(auth, email, password);
        setIsAuthenticated(true); //muda o estado
        navigate("/home");
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

  //login com google usando função assincrona
  const handleGoogleSignIn = async () => {
    try {
      //chamando a função de login com google
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true); //muda o estado
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

        {!isSignUp && <a>Forgot Password</a>}

        <button className="login-button" type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        {/*botão de login com google*/}
        <button className="google-button" onClick={handleGoogleSignIn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Icon" className="google-icon" /> {/* Ícone do Google */}
          Sign in with Google
        </button>

        {error && <p className="error-message">{error}</p>} {/*mensagem de erro*/}

      </form>

      <p className="signup-text">
        {isSignUp ? (
          <>If you have an account? <a onClick={() => setIsSignUp(false)}>Sign In here</a></>
        ) : (
          <>Didn’t have any account? <a onClick={() => setIsSignUp(true)}>Sign Up here</a></>
        )}
      </p>

    </div>
  );
};

export default Login;
