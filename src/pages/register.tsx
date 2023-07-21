
import {  useState } from 'react';
import heroImg from '@/assets/hero.png';
import { RemoveRedEye , PasswordSharp} from '@mui/icons-material';
import Image from 'next/image';
import styles from '@/styles/register.module.scss';


type companyCredentials = {
  email: string,
  password: string,
  confirmPassword: string
}

type Errors = {
  emailEmptyError : string  | null,
  emailAtError : string | null,
  emailDotError : string | null,
  passwordEmptyError : string | null,
  passwordLengthError : string | null,
  confirmPasswordError : string | null
};






 const RegisterCompany = () => {

  
  const [errors, setErrors] = useState<Errors | null >({
    emailEmptyError : "Email is required",
    emailAtError : "Email must contain @",
    emailDotError : "Email must contain .",
    passwordEmptyError : "Password is required",
    passwordLengthError : "Password must be at least 8 characters",
    confirmPasswordError : "Passwords must match"
  });

  const [credentials, setCredentials] = useState<companyCredentials | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showErrors, setShowErrors] = useState(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (Object.keys(errors!).length > 0 || errors !== null) {
      setShowErrors(true);
    }else {
      setShowErrors(false);
      console.log(credentials);
    }
    e.preventDefault();
  }

  const setErrorOnInput = (input: HTMLInputElement) => {
    input.style.borderBottom = '2px solid red';
  }


  const handleShowPassword = () => {
    setShowPassword(!showPassword); 
  }
  const resetInputError = (input: HTMLInputElement) => {
    input.style.borderBottom = '2px solid lightgreen';
  }



  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const isEmpty = e.target.value.trim() === '';
    const isAtIncluded = e.target.value.includes('@');
    const isDotIncluded = e.target.value.includes('.');

    if ( isEmpty ) {
        
      setErrorOnInput (e.target);
      setErrors ({ ...errors!, emailEmptyError: 'Email is required' });
  
    } else if ( !isAtIncluded ) {
      
      setErrorOnInput(e.target);
      setErrors ({ ...errors!, emailAtError: 'Email must contain @' });
    
    } else if ( !isDotIncluded ) {
      
      setErrorOnInput(e.target);
      setErrors ({ ...errors!, emailDotError: 'Email must contain .' });
      
    } else if ( isAtIncluded && isDotIncluded && !isEmpty ) {
      
      setErrors(
        {
          ...errors!,
          emailEmptyError: null,
          emailAtError: null,
          emailDotError: null
        }
      )
      validateData(e);
    }  
  }


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const isEmpty = e.target.value.trim() === '';
    const isCorrect = e.target.value.length >= 8; 
    
    if ( isEmpty ) {
        
      setErrorOnInput (e.target);
      setErrors ({ ...errors!, passwordEmptyError: 'Password is required' });        
    
    } else if (!isCorrect ) {
      
      setErrorOnInput (e.target);
      setErrors ({ ...errors!, passwordLengthError: 'Password must be at least 8 characters' });
    
    } else if ( isCorrect && !isEmpty ) {
    
      setErrors(
        {
          ...errors!,
          passwordEmptyError: null,
          passwordLengthError: null
        }
      )
      validateData(e);
    }
  }
    
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {

      const passwordsMatch = e.target.value === credentials?.password;
      
      if ( !passwordsMatch ) {

        setErrorOnInput (e.target);
        setErrors ({ ...errors!, confirmPasswordError: 'Passwords must match' });
      
      }else if ( passwordsMatch ) {
        
        setErrors(
          {
            ...errors!,
            confirmPasswordError: null
          }
        )
        validateData(e);
      }  
  }



  const validateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    resetInputError(e.target);
      setCredentials({
        ...credentials!,
        [e.target.name]: e.target.value
      }); 
  }

  return (
    <section className={styles.companyAuth}> 
      <Image src={heroImg} alt="background image" />
      <div className={`${styles.formCointainer} flexColumn`}>
        <h1>Company Register</h1>
        <form onSubmit={handleSubmit} className={`${styles.formEl} flexColumn`}>
          <input 
            className={styles.inputEl}
            name='email'
            onChange={handleEmailChange}
            type="email" 
            placeholder='Company Email' 
          />
          <div className={`${styles.formInput} flexRow`}>
            {
              showPassword ? 
              (
                <input
                  className={styles.inputEl} 
                  name = 'password'
                  onChange={handlePasswordChange}
                  type="text"   
                  placeholder='Password' 
                />
              ):(
                <input 
                  className={styles.inputEl}
                  name = 'password'
                  onChange={handlePasswordChange}
                  type="password" 
                  placeholder='Password' 
                />
              )
                
            }
            <button 
              className={styles.eyeButton}
              tabIndex={-1}
              onClick={handleShowPassword}
            >
              {
                showPassword ? <PasswordSharp className={styles.eye}/> : <RemoveRedEye className={styles.eye}/>
              }
            </button>
          </div>
          <div className={styles.formInput}>
            {
              showPassword ? 
              (
                <input 
                  className={styles.inputEl}
                  name='confirmPassword'
                  onChange={handleConfirmPasswordChange}
                  type="text" 
                  placeholder='Confirm Password' 
                />
              ) : (
                <input 
                  className={styles.inputEl}
                  name='confirmPassword'
                  onChange={ handleConfirmPasswordChange}
                  type="password"   
                  placeholder='Confirm Password' 
                />
              )
            }
            <button
              className={styles.eyeButton} 
              tabIndex={-1}
              onClick={handleShowPassword}
            >
              {
                showPassword ? 
                  <PasswordSharp className={styles.eye}/> 
                  :
                  <RemoveRedEye className={styles.eye}/>
              }
            </button>
          </div>
          <button className={styles.submitButton}  type='submit'>
            Register
          </button>
        </form>
        
          {
            showErrors ?
            (
              <>
                {
                  Object.keys(errors!).map((key) => {
                    if (errors![key as keyof Errors]) {
                      return (
                        <p
                          style={{
                            color: 'red',
                            fontSize: '0.8vw',
                            margin : "0",
                            fontWeight: 600,
                            textAlign: 'left'
                          }}
                          key={key} className={styles.error}>
                            {errors![key as keyof Errors]}
                        </p>
                      )
                    } 
                  })
                }
              </>
            ):(
              null
            )
          }
        <div className={styles.links}>
          <a href="/companies/login">Already have a company account?</a>
        </div>
      </div>    
    </section>
  ); 

};


export default RegisterCompany;