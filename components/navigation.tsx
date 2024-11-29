"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <span className={path === "/" ? styles["ul-bold"] : ""}>Home</span>{" "}
            {path === "/" && "🔥"}
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <span className={path === "/about-us" ? styles["ul-bold"] : ""}>
              About Us
            </span>{" "}
            {path === "/about-us" && "🔥"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
