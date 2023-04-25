import Link from "next/link"
import styles from "@/styles/Home.module.css"
export default function Home() {
  return (
    <>
      <h2 className={styles.title}>Esse é o conteudo:</h2>
      <Link href="/user/login">
          <button>
              Login
          </button>
      </Link>
    </>
  )
}
