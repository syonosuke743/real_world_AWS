"use client"
import { useState, useEffect } from 'react';
import styles from "@/components/layouts/home.module.css";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:3001/api/v1/posts");
      const postsData = await res.json();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/posts/${postId}`);
      // 削除後に状態を更新
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
    } catch (err) {
      alert("Article could not be deleted");
    }
  };

  return (
    <div>
      <div className={styles.feed}>Global Feed</div>
      {posts.map(post => (
        <div className={styles.article} key={post.id}>
          <Link href={`posts/${post.id}`}>
            <div className={styles.title}>{post.title}</div>
          </Link>
          <div className={styles.description}>{post.description}</div>
          <div className={styles.body}>{post.body}</div>
          <Link href={`edit-post/${post.id}`}>
            <button className={styles.editButton}>Edit</button>
          </Link>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

