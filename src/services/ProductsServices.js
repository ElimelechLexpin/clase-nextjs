export async function getProducts(){
  // Simulamos un retraso
  //await new Promise(resolve => setTimeout(resolve, 1000));

  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};