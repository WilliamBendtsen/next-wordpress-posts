import PostCard from "../components/PostCard";
import styles from "../page.module.css";
import Image from "next/image";

export default async function PostsPage() {
  const response = await fetch(
    "https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard"
  );
  const posts = await response.json();
  console.log(posts);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Wordpress Posts</h1>
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title.rendered}
              image={post.acf.image}
              link={post.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
