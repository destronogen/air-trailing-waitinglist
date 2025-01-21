"use client"

import { useState } from "react"
import styles from "../styles/accordion.module.css"

interface AccordionItem {
  title: string
  content: string
}

const faqItems: AccordionItem[] = [
  {
    title: "What will I get in return?",
    content:
      "Your trailer / caravan shall be marketed and advertised everyday on all socials. A trusted, secure and protected platform for listing your trailer or caravan for rental.",
  },
  {
    title: "What do I need to get onboard?",
    content:
      "A roadworthied and licensed trailer or caravan. And the will to make extra cash :)",
  },
  {
    title: "When will the application be available?",
    content:
      "The application will be available soon! Join the waitlist to be notified when we launch and get exclusive early access pricing.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.accordion}>
      {faqItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <button className={styles.trigger} onClick={() => toggleAccordion(index)} aria-expanded={openIndex === index}>
            {item.title}
            <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ""}`}>▼</span>
          </button>
          {openIndex === index && <div className={styles.content}>{item.content}</div>}
        </div>
      ))}
    </div>
  )
}

