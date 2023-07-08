import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Trending from "app/(home)/Trending";
import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import Sidebar from "app/(shared)/Sidebar";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

export const revalidate = 60;

const getPosts = async () => {
  // fetch all post from prisma, 'Post' type was set up by prisma automatically
  const posts: Array<Post> = await prisma.post.findMany();

  // solving 'blurDataURL' error
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default, // no longer a string, it becomes a static import
      };
    })
  );

  return formattedPosts;
};
// add 'async' and execute 'getPosts' to connect to the backend
export default async function Home() {
  const posts: Array<Post> = await getPosts();
  // this log will show in my terminal istead of in browser console.
  // console.log("posts: ", posts);

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      <Trending posts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech posts={techPosts} />
          <Travel posts={travelPosts} />
          <Other posts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
