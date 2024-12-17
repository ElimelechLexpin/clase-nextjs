"use client"
import { signIn } from "next-auth/react"

export default function Page() {
  const handleLogin = async () =>{
    await signIn('credentials',{
      redirect: true,
      callbackUrl: '/dashboard',
      username: 'admin',
      password: '1234'
    });
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Iniciar sesion</button>
    </div>
  );
}