"use client"

import type { FormEvent } from "react"
import styles from "../styles/form.module.css"

export default function WaitlistForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Your first name" className={styles.input} required />
      <input type="email" placeholder="Your email address" className={styles.input} required />
      <input type="email" placeholder="Your contact number" className={styles.input} required />
      <input type="email" placeholder="What are you be willing pay for this service?" className={styles.input} required />
      <button type="submit" className={styles.button}>
        NOTIFY ME
      </button>
    </form>
  )
}

