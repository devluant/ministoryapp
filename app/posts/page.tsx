type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Posts[]> {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  const postElements = posts.map((post) => {
    return (
      <div key={post.id} className="border flex flex-col justify-between">
        <p>{post.id}</p>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>{post.userId}</p>
      </div>
    );
  });
  return (
    <main>
      <h2>Posts</h2>
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {postElements}
      </div>
    </main>
  );
}
