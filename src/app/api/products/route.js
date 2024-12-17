export async function GET(req){
  // LOGICA PARA TRAER LA INFORMACION DE PRODUCTOS
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");
  return Response.json({message: id}, {status: 200});
};

export async function POST(req){
  // LOGICA PARA CREAR UN PRODUCTO
  const body = await req.json();
  return Response.json(body, {status: 201});
};

export async function PUT(req){
  // LOGICA PARA ACTUALIZAR UN PRODUCTO
  const body = await req.json();
  return Response.json(body, {status: 200});
};

export async function DELETE(req){
  // LOGICA PARA ELIMINAR UN PRODUCTO
  const body = await req.json();
  return Response.json(body, {status: 200});
};