import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { EmployeeData } from '../../../types';



interface GroupAvatarsProps {
  employeeList: EmployeeData[];
  style?: React.CSSProperties;
}

export const  GroupAvatars = ({ employeeList, style }: GroupAvatarsProps) => {



  return (
    <AvatarGroup max={4} style={style}>
      { employeeList && employeeList.map((employee) => (
        <Avatar key={employee.id} alt={employee.name} src={employee.photo} />

      ))}
    </AvatarGroup>
  );
}
