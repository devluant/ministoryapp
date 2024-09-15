import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <Card key={post.id} className="flex flex-col justify-between">
        <CardHeader>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar image"
            />
            <AvatarFallback>
              {post.title.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>published by {post.userId}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>{post.body}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <button>View Post</button>
          <p>{post.id}</p>
        </CardFooter>
      </Card>
    );
  });
  return (
    <main>
      <h2>Posts</h2>
      <div className="grid grid-cols-2 gap-4 container mx-auto">
        {postElements}
      </div>
    </main>
  );
}
