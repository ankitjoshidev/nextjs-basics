"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Blogs",
    path: "/blog"
  },
  {
    title: "Gallery",
    path: "/gallery"
  }
];

export default function Links({session}) {
    

  const [open, setOpen] = useState(false);
  return (

    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
