import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../../config/config";
import { signInWithEmailAndPassword } from "firebase/auth";


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
    <div className="login-container">
      <h1>Login</h1>

      {/*formu de login por email e senha*/}
      <form onSubmit={handleEmailSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      {error && <p className="error-message">{error}</p>} {/* Mensagem de erro */}

      <hr />

      {/*botão de login com google*/}
      <button className="google-signin" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
