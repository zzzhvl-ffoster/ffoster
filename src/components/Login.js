import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
    } catch (error) {
      alert("Ошибка авторизации: " + error.message);
    }
  };

  return (
    <div>
      <h2>Вход в админку</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Войти</button>
    </div>
  );
}
