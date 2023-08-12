import {useState} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { EmployeeData, ProjectData } from '@types';
import { useRouter } from 'next/router';

function createData(
  projectName: string,
  estimatedDate: string,
  projectType : string,
  teamMembers: number,
  projectStatus: string,
  description:string,
  projectId: string
) {
  return {
    projectName,
    estimatedDate,
    projectType,
    teamMembers,
    projectStatus,
    description,
    projectId
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const companyName = router.query.companyName as string;
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.projectName}
        </TableCell>
        <TableCell align="right">{row.estimatedDate}</TableCell>
        <TableCell align="right">{row.projectType}</TableCell>
        <TableCell align="right">{row.teamMembers}</TableCell>
        <TableCell 
          sx={{
            textDecoration : "underline" , 
            cursor : "pointer"
          }}
          onClick={() => router.push(`/company/${companyName}/project/${row.projectId}`)}
        align="right">{row.projectStatus}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <p>
                {row.description}
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


type CollapsibleTableProps = {
  projects?: ProjectData[];
}

export default function ProjectsTable({ projects } : CollapsibleTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Estimated Date</TableCell>
            <TableCell align="right">Project Type</TableCell>
            <TableCell align="right">Team Members</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects?.map((project) => (
            <Row key={project._id.toString()} row={createData(
              project.projectName,
              project.projectEndDate,
              project.projectStartDate,
              project.assigned.length,
              project.projectStatus,
              project.projectDescription,
              project._id.toString()
            )} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



type EmployeeTableProps = {

  employees: EmployeeData[]
  
}


const createEmployeeData = (  
  employeeName: string,
  employeeRole: string,
  employeeEmail : string,
  employeeStartDate: string,
) => {
  return {
    employeeName,
    employeeRole,
    employeeEmail,
    employeeStartDate,
  };
}




function EmployeeRow(props: { row: ReturnType<typeof createEmployeeData> }) {
  const { row } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.employeeName}
        </TableCell>
        <TableCell align="right">{row.employeeRole}</TableCell>
        <TableCell align="right">{row.employeeEmail}</TableCell>
        <TableCell align="right">{row.employeeStartDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <p>
                {row.employeeName}
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );

}

export const EmployeesTable = ({employees} : EmployeeTableProps) => {
  return (
    <TableContainer sx={{overflow : 'hidden'}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <EmployeeRow key={employee._id.toString()} row={createEmployeeData(
              employee.employeeName || "default",
              employee.employeeRole || "default",
              employee.employeeEmail || "default",
              employee.employeeStartDate || "default",
            )} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}