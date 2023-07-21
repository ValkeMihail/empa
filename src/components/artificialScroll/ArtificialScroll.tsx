import { ArrowDropDown } from "@mui/icons-material"
import { useState } from "react"
import styles from './artificialScroll.module.css';

type ArtificialScrollProps = {
  scrollToNextRef  : (nr : number) => void;
}

export const ArtificialScroll = ({scrollToNextRef} : ArtificialScrollProps) => {

  const listofNrs = [1,2,3,4,5,6];
  const [currentNr, setCurrentNr] = useState(1);


  const updateCurrentNr = () => {
    if (currentNr === 5) {
      setCurrentNr(1);
    } else {
      setCurrentNr(currentNr + 1);
    }
    scrollToNextRef(currentNr);
  }


  return (
    <div className={`${styles.artificialScroll} flexColumn`}>
      <div className={styles.listOfNr}>
        {
          listofNrs.map((nr) => {
            return (
              <div 
              className={`${styles.artificialScrollItem} ${currentNr === nr ? styles.currentNr : ''}`}
                key={nr}>
                {nr}
              </div>
            )
          })
        }
      </div>
     
      <ArrowDropDown 
        onClick={updateCurrentNr}
        className= {styles.arrowDownArtScroll}
      />
    </div>


  )
}
