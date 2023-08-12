import { ReactNode } from "react"
import Navigation from "../navigation/Navigation"
import styles from './layout.module.scss'


const CompanyLayout = ({children} : {children : ReactNode}) => {
  return (
    <div className={styles.layout}>
      <Navigation/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default CompanyLayout
