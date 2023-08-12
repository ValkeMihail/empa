import Image from 'next/image'
import styles from './navigation.module.scss'
import { AccountTree,  Dashboard, Domain, Hub, Logout, Notifications} from '@mui/icons-material'
import { Autocomplete, Button, ButtonGroup, TextField } from '@mui/material'

const Navigation = () => {
  return (
    <nav className={`${styles.nav} flexColumn`}>
      <section className={styles.topNav}>

        <div className={styles.userWrap}>
            <Image
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="user"
              width={50}
              height={50}          
            />
            <div className={styles.titleWrap}>
              <p>
                Post Malone
              </p>
              <span>
                Software Developer
              </span>
            </div>
          <Notifications className={styles.icon}/>
        </div>
        <hr style={{  width: '90%'}}/>
        <Autocomplete
          fullWidth
          sx={{
            padding: '0 1rem',
          }}
          id="searchInput"
          freeSolo
          disableClearable
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Quick Search"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          fullWidth
          sx={{padding: '0 1rem'}}
        >
          <Button sx={{color: "black"}} className={styles.linkWrap}>       
            <Dashboard className={styles.icon}/>
            <p>
              Dashboard
            </p>
          </Button>
          <Button sx={{color: "black"}} className={styles.linkWrap}>       
            <Domain className={styles.icon}/>
            <p>
              {"Netflix"}
            </p>
          </Button>
          <Button sx={{color: "black"}} className={styles.linkWrap}>       
            <AccountTree className={styles.icon}/>
            <p>
              {"Projects"}
            </p>
          </Button>
          <Button sx={{color: "black"}} className={styles.linkWrap}>
            <Hub className={styles.icon}/>
            <p>
              {"Departments"}
            </p>
          </Button>
        </ButtonGroup>
      </section>
      <Button
        aria-label="logout" 
        sx={{color : "black" , textTransform : "none" , alignSelf: "flex-end" , paddingRight: "1rem"}} >
          <Logout/>
      </Button>
    </nav>

  )
}

export default Navigation
