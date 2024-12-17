"use client";

import { signOut,useSession } from "next-auth/react";
export default function Page() {
  const {data: session, status} = useSession();

  if(status == "loading"){
    return (<h1>Loading...</h1>)
  }

  const cerrarSesion = async()=>{
    await signOut();
  }

  return (
    <div>
      <h1>Bievenido {session?.user?.name}</h1>
      <p>{session?.user?.hola}</p>
      <button onClick={cerrarSesion}>Cerrar la sesion</button>
    </div>
  );
}