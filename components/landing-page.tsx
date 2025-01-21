import Image from "next/image"
import WaitlistForm from "./components/waitlist-form"
import FAQAccordion from "./components/faq-accordion"
import styles from "./styles/landing.module.css"

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <h1 className={styles.courseTitle}>THE BEST TRAILER & CARAVAN MARKETPLACE</h1>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-21%20at%2014.28.17-CnYzluUXHk7p2qsbmuWYNX1K0phyNR.png"
            alt="Course Preview"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
          <FAQAccordion />
          <h2 className={styles.joinText}>JOIN 100+ TRAILEE'S</h2>
          <p className={styles.bonus}>
            P.S. I'll send you an email on what to expect after joining waitlist! 🙌
          </p>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.masteryTitle}>AIR TRAILING</div>
          <h2 className={styles.waitlistTitle}>Join the waitlist</h2>
          <p className={styles.description}>
            Do you have a trailer or caravan that is just sitting around, taking up space and paying no rent ? What if you could list your trailer or caravan for rental and make extra income! Air Trailing is the future of trailer and caravan rentals. Join our waitlist and get exclusive early access pricing.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  )
}

