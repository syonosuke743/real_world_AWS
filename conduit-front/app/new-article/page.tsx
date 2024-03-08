"use client"
import React, { FormEvent, useState } from 'react'
import styles from "@/components/layouts/home.module.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreatePost = () => {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [body,setBody] = useState("");
  const router = useRouter();

  const handleSubmit = async (e :FormEvent) => {
    e.preventDefault();
    console.log( title, description, body);

    //APIをたたく
    try {
      await axios.post("http://localhost:3001/api/v1/posts",{
        title: title,
        description: description,
        body: body,
      });

      router.push("/")
    } catch (err) {
      alert("New article do not create")
    }
  }

  return (
    <div>
    <h2 className={styles.h2}>New Article</h2>

    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" className={styles.feedbackinput} placeholder="Title" 
      onChange={(e) => setTitle(e.target.value)} />   
      <input type="text" className={styles.feedbackinput} placeholder="description" 
      onChange={(e) => setDescription(e.target.value)}/>
      <textarea  className={styles.feedbackinput} placeholder="body" 
      onChange={(e) => setBody(e.target.value)}></textarea>
      <button type="submit">Create New Article</button>
    </form>
  </div>
  )
}

export default CreatePost