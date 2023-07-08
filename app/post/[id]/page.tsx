import Sidebar from "@/app/(shared)/Sidebar";
import { prisma } from "@/app/api/client";
import { FormattedPost } from "@/app/types";
import { Post as PostType } from "@prisma/client";
import Content from "./Content";

type Props = {
  params: { id: string };
};

export const revalidate = 60;

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });
  if (!post) {
    console.log(`Post with id ${id} not found.`);
    return null;
  }
  // formate date object
  const formattedPost: FormattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

/* 
// fetch api call
const response = await fetch(url, {
  // cache:"force-cache", // SSG (getStaticSideProps) server side generation
//   cache: "no-store", // SSR (getServerSideProps) server side rendering
  next: { revalidate: 60 }, // ISR (revalidation) incremental server rendering
});

const post:PostType = await postResponse.json(); */

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);
  //   console.log("post: ", post);

  if(!post){
    return <div>Post not found!</div>
  }
  
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
