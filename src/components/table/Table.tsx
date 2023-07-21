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

function createData(
  projectName: string,
  estimatedDate: string,
  projectType : string,
  teamMembers: number,
  projectStatus: string,
  description:string,
) {
  return {
    projectName,
    estimatedDate,
    projectType,
    teamMembers,
    projectStatus,
    description,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
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
          {row.projectName}
        </TableCell>
        <TableCell align="right">{row.estimatedDate}</TableCell>
        <TableCell align="right">{row.projectType}</TableCell>
        <TableCell align="right">{row.teamMembers}</TableCell>
        <TableCell align="right">{row.projectStatus}</TableCell>
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

const rows = [
  createData ('Employee Management', "Sep 12, 2020 - Dec 10, 2020", "Web App", 21, "In Pogress","asdasdagegw"),
];

export default function CollapsibleTable() {
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
          {rows.map((row) => (
            <Row key={row.projectName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}