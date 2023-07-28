import { useState } from "react";
import Image from "next/image";
import companyHeroImg from "@/assets/hero-employee.png";
import { PasswordSharp, RemoveRedEye } from "@mui/icons-material";
import styles from "@/styles/company/employeeLogin.module.scss";
import { loginEmployee } from "@/utils/client-api";
import { useRouter } from 'next/router';


type EmployeeLoginProps = {
  handleErrorUpdate : (errorMessage: string) => void;
};

const EmployeeLogin = ({handleErrorUpdate} : EmployeeLoginProps) => {
  
  const router = useRouter();

  const { companyName } = router.query;
  const companyNameString = companyName as string;
  
  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const setError = (errorMessage: string) => {
    handleErrorUpdate(errorMessage);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResponse = await loginEmployee(email, password);
    if (loginResponse === 'error') {
      setError('Something went wrong');
    } else {
      router.push(`/company/${companyNameString}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {companyNameString && (
        <h1 className={styles.formTitle}>
          Welcome Back! Login to access <br /> {companyNameString.toUpperCase()}
        </h1>
      )}
      
      <div className={styles.formInput}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          className={styles.formControl}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formInput}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          id="password"
          className={styles.formControl}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          tabIndex={-1}
          onClick={handleShowPassword}
          className={styles.eyeButton}
        >
          {showPassword ? (
            <PasswordSharp className={styles.eye} />
          ) : (
            <RemoveRedEye className={styles.eye} />
          )}
        </button>
      </div>
      <button className={styles.submitButton} type="submit">
        Login
      </button>
    </form>
  );
};


type EmployeeAuthProps = {
  errorMessage?: string;
};


const EmployeeAuth = () => {

  const [errorMessage, setErrorMessage] = useState<null | string>(null); // This is the error message that will be displayed if login fails

  const handleErrorUpdate = (errorMessage: string) => {
    setErrorMessage(errorMessage);
  };

  

  return (
    <main className={`${styles.employeeAuthContainer} flexRow`}>
      <section className={styles.companyHero}>
        <Image src={companyHeroImg} alt="company hero image" />
      </section>
      <section className={styles.authContainer}>
        <EmployeeLogin handleErrorUpdate={handleErrorUpdate} />
        <div className={styles.links}>
          <a href="/companies/employee/resetpassword">Forgot Password?</a>
        </div>
        <div>
          {
            errorMessage! && (
              <div 
                style={{
                  color: 'red',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >
                {errorMessage}
              </div>
            )

          }
        </div>
      </section>
    </main>
  );
};

export default EmployeeAuth;
