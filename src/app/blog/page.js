import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/components/lib/data";

const getData = async () => {
  // const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});
  const res = await getPosts()

  if (!res) {
    throw new Error("Something went wrong");
  }

  // return res.json();
  return res;
};

export default async function Blog() {

  const posts = await getData();

  return (
    <div className={styles.container}>
    {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <PostCard post={post} />
      </div>
    ))}
  </div>
  );
}
