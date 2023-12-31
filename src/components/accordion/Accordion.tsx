
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProjectData, TaskData } from '@types';
import { CircularProgressWithLabel } from '../circularProgress/CircularProgressWithLabel';
import styles from  './accordion.module.scss';
import { VerticalLinearStepper } from '../verticalStepper/VerticalStepper';

type CustomizedAccordionProps = {
  projects:ProjectData[];
  tasks: TaskData[];
}

export const CustomizedAccordion = ({projects, tasks} : CustomizedAccordionProps) => {
  return (
    <div className='flexColumn accordionsContainer'>
      {
        projects?.map((project,index) => (
          <Accordion key={project._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <div className='accordionHeader flexColumn'>
              <CircularProgressWithLabel
              value={project.projectCompletion}
              />
              <div className='flexRow titleWrap'>
                <h3>
                  {project.projectName}
                </h3>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className='accordionContent flexColumn'>
              <img className='iconWrap' src={project.projectPhoto} alt="project photo" />
              <h3>
                {project.projectDescription}
              </h3>
              <div className='projectTasks flexColumn'>
              <VerticalLinearStepper tasks={tasks}/>
              </div>
            </div>
          </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  );
}