import styles from "@/components/layouts/home.module.css";


export default async function article ({ params }) {

  const res = await fetch(`http://localhost:3001/api/v1/posts/${params.id}`);
  const posts = await res.json();

  //console.log(posts)

  return(
    <div className={styles.article}>
      <div className={styles.title}>{posts.title}</div>
      <div className={styles.description}>{posts.description}</div>
      <div className={styles.body}>{posts.body}</div>
    </div>
  )
}

