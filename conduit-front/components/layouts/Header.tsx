import React from 'react';
import styles from "@/components/layouts/header.module.css";

const Header = () => {
  return (
<header className={styles.header}>
    <h1 className={styles.h1}>
        <a className={styles.a} href="/">Conduit</a>
    </h1>
    <nav className={styles.pcnav}>
        <ul className={styles.ul}>
            <li className={styles.li}><a href="/">HOME</a></li>
            <li className={styles.li}><a href="signin">Sign in</a></li>
            <li className={styles.li}><a href="signup">Sign up</a></li>
            <li className={styles.li}><a href="new-article">New Article</a></li>
        </ul>
    </nav>
</header>
  )
}

export default Header