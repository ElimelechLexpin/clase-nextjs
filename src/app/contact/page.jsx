"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };
  return (
    <>
      <h1>Contact!</h1>
      <button onClick={handleHome}>Volver a Home</button>
    </>
  );
}
