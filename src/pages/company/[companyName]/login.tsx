import { useState } from "react";
import Image from "next/image";
import companyHeroImg from "@/assets/hero-employee.png";
import { PasswordSharp, RemoveRedEye } from "@mui/icons-material";
import styles from "@/styles/company/employeeLogin.module.scss";
import { useRouter } from "next/router";

const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter();
  const { companyName} = router.query;
  const companyNameString = companyName as string;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO - handle login
  };

  return (
    <form onSubmit={handleSubmit}>
      { companyNameString &&
        (
          <h1 className={styles.formTitle}>
            Welcome Back! Login to access <br /> {companyNameString.toUpperCase()}
          </h1>
        )
      }
      <div className={styles.formInput}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          className={styles.formControl}
        />
      </div>
      <div className={styles.formInput}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          id="password"
          className={styles.formControl}
        />
        <button tabIndex={-1} onClick={handleShowPassword} className={styles.eyeButton}>
          {showPassword ? <PasswordSharp className={styles.eye} /> : <RemoveRedEye className={styles.eye} />}
        </button>
      </div>
      <button className={styles.submitButton}>Login</button>
    </form>
  );
};

const EmployeeAuth = () => {
  return (
    <main className={`${styles.employeeAuthContainer} flexRow`}>
      <section className={styles.companyHero}>
        <Image src={companyHeroImg} alt="company hero image" />
      </section>
      <section className={styles.authContainer}>
        <EmployeeLogin />
        <div className={styles.links}>
          <a href="/companies/employee/resetpassword">Forgot Password?</a>
        </div>
      </section>
    </main>
  );
};

export default EmployeeAuth;
