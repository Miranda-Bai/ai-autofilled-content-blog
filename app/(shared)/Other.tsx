import { Post } from "@prisma/client";
import Card from "app/(shared)/Card";

type Props = {
  posts: Array<Post>;
};

const Other = ({ posts }: Props) => {
  return (
    <section className="mb-16 pt-4">
      <hr className="border-1" />
      {/* header */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={posts[0]}
        />
         <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={posts[1]}
        />
         <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={posts[2]}
        />
         <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={posts[3]}
        />
      </div>
    </section>
  );
};

export default Other;
