export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const posts = await data.json();
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}> {post.id} - {post.title}</li>
        ))}
      </ul>
    </>
  );
}
