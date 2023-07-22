import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import styles from "./companyDepartments.module.scss";
import { DepartmentData } from "../../../../types";

type CompanyDepartmentsProps = {
  departments: DepartmentData[];
};

export const CompanyDepartments = ({ departments }: CompanyDepartmentsProps) => {
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
          {departmentsData.length !== 0 &&
            departmentsData.map((department) => (
              <div key={department._id} className={styles.department}>
                <img
                  src={department.departmentPhoto}
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
