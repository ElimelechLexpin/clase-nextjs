import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//import mysql from "mysql2/promise";
export const handler = NextAuth({
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Escribe tu usuario" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Vamos a conectarnos a una base de datos SQL
        /*try{
          const conn = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "apiflask2"
          });

          const [rows] = await conn.execute(
            "SELECT * FROM users WHERE username = ?",
            [username]
          )
          const [rows] = await conn.execute(
            "SELECT * FROM users"
          );

          if(rows.length > 0){
            console.log(rows);
          }
          //Cerramos la conexion
          await conn.end();

        }catch(error){
          console.error(error);
        }*/

        if (username === "admin" && password === "1234") {
          return {
            id: "1",
            name: "Admin",
            username: "admin",
            role: "admin"
          }
        };

        // Si las credenciales son invalidas retornamos null
        return null;
      }
    })
  ],
  pages:{
    signIn: "/login",
    error: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callbacks:{
    async session({ session, token}){
      console.log(token);
      console.log(session);
      session.user.id = token.sub;
      session.user.hola = "Hola desde la sesion";
      return session;
    }
  }
});

export {handler as GET, handler as POST};