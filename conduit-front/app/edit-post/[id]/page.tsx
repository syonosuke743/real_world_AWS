"use client"
import React, { FormEvent, useState, useEffect } from 'react';
import styles from "@/components/layouts/home.module.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const EditPost = ({ params }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/posts/${params.id}`);
        const postData = response.data;
        setTitle(postData.title);
        setDescription(postData.description);
        setBody(postData.body);
      } catch (err) {
        console.error("Error fetching post data", err);
      }
    };

    if (params.id) {
      fetchPostData();
    }
  }, [params.id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(title, description, body);

    try {
      await axios.put(`http://localhost:3001/api/v1/posts/${params.id}`, {
        title: title,
        description: description,
        body: body,
      });

      router.push("/");
    } catch (err) {
      alert("Article update failed");
    }
  };

  return (
    <div>
      <h2 className={styles.h2}>Edit Article</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.feedbackinput}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          className={styles.feedbackinput}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <textarea
          className={styles.feedbackinput}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default EditPost;
