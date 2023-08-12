import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useRef, useState, useEffect, Key } from "react";
import { animateScroll as scroll } from "react-scroll";
import styles from "./companyDepartments.module.scss";
import { DepartmentData } from "../../../../types";
import heroEmployee from "@/assets/hero-employee.png";
import Image from "next/image";
import { useRouter }  from "next/router";


type CompanyDepartmentsProps = {
  departments: DepartmentData[];
};

export const CompanyDepartments = ({ departments }: CompanyDepartmentsProps) => {


  const router = useRouter();


  const [departmentsData, setDepartmentsData] = useState([] as DepartmentData[]);

  useEffect(() => {
    setDepartmentsData(departments);
  }, [departments]);

  const departmentsRef = useRef<HTMLDivElement>(null);

  const scrollToTheLeft = () => {
    if (departmentsRef.current) {
      scroll.scrollMore(-departmentsRef.current.clientWidth, {
        containerId: "scrollContainer",
        duration: 500,
        smooth: true,
        horizontal: true,
        vertical: false,
      });
    }
  };

  const scrollToTheRight = () => {
    if (departmentsRef.current) {
      scroll.scrollMore(departmentsRef.current.clientWidth, {
        containerId: "scrollContainer",
        duration: 500,
        smooth: true,
        horizontal: true,
        vertical: false,
      });
    }
  };

  return (
    <section className={styles.companyDepartmentsContainer}>
      <h3>Departments</h3>
      <div id="scrollContainer" ref={departmentsRef} className={`${styles.departmentsWrap} flexRow`}>
        <button onClick={scrollToTheLeft} className={styles.scrollLeft}>
          <ArrowLeft />
        </button>
        <button onClick={scrollToTheRight} className={styles.scrollRight}>
          <ArrowRight />
        </button>
        <>
          { departmentsData?.map((department) => (
              <div 
                onClick={() => {router.push(`/company/${router.query.companyName}/department/${department._id}`)}}
                key={department._id.toString()} className={styles.department}>
                <Image
                  width={200}
                  height={200}
                  src={department.departmentPhoto ? department.departmentPhoto : heroEmployee}
                  alt={"department" + department.departmentName}
                />
                <h4>{department.departmentName}</h4>
              </div>
              
            ))}
        </>
      </div>
    </section>
  );
};
