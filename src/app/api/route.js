export async function GET(req){
  // LOGICA PARA TRAER LA INFORMACION
  return Response.json({message: "Hola desde mi API :D"}, {status: 200});
};

