import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/system';

type SelectLabelsProps = {
  onCalendarViewChange : (event: SelectChangeEvent) => void;
  style ?: React.CSSProperties;
};


const StyledFormControl = styled(FormControl)({
  '& label.Mui-focused': {
    color: '#1fd6ff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1fd6ff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1fd6ff',
    },
  },

  // also make it 2em height

  "& .MuiInputBase-root": {
    height: '2.5em',
  },


});


export const SelectLabels = ({onCalendarViewChange, style} : SelectLabelsProps) => {
  const [calendarView, setCalendarView] = useState('');

   const handleChange = (event: SelectChangeEvent) => {
    setCalendarView(event.target.value);
    onCalendarViewChange(event as SelectChangeEvent<string>);
  };

  return (
    <div style={style}>
      <StyledFormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Show</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={calendarView}
          label="show"
          onChange={handleChange}
          defaultValue='dayGridMonth'
        >
          
          <MenuItem value='dayGridDay'>Day</MenuItem>
          <MenuItem value='dayGridWeek'>Week</MenuItem>
          <MenuItem value='dayGridMonth'>Month</MenuItem>
        </Select>
        <FormHelperText>Select Calendar View</FormHelperText>
      </StyledFormControl>
  
    </div>
  );
}