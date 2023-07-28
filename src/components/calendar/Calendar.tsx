import React, { useState , useEffect} from 'react';
import FullCalendar  from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SelectLabels } from '../select/Select';
import { SelectChangeEvent } from '@mui/material';
import { TaskData } from '@types';
import styles from  './calendar.module.scss';

type CalendarProps = {
  worktasks: TaskData[];
};



export const Calendar = ({worktasks} : CalendarProps ) => {

  const [currentView, setCurrentView] = useState('dayGridMonth');
  const calendarRef = React.createRef<any>();


  const handleViewChange = (event : SelectChangeEvent ) => {
    setCurrentView(event.target.value);
  };

  useEffect (() => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(currentView);
  }, [currentView]);

  
  const CalendarStyles: React.CSSProperties = {
    width: '95%',
    padding: '1.5em',
    height: '100%',
    marginTop: '1em',
  };
  const selectStyles: React.CSSProperties = {
    position: 'absolute',
    top: '2em',
    right: '22.5vw',
    zIndex: 100,
  };
  

  const dayHeaderContent = (arg: any) => {

    const dayOfWeek = arg.date.toLocaleString('default', { weekday: 'short' });
    const dayNumber = arg.date.getDate();
    
    if (currentView === 'dayGridWeek' || currentView === 'dayGridDay') { 
    
      return (
        <div>
          <div>{dayOfWeek}</div>
          <div>{dayNumber}</div>
        </div>
      );
    }else{
      
      return (
        <div>
          <div>{dayOfWeek}</div>
        </div>
      );
    }
  };

  const eventContent = (arg: any) => {
    const { priority } = arg.event.extendedProps;

    const eventStyle: React.CSSProperties = {
      backgroundColor: getColorBasedOnPriority(priority),
      borderRadius: '0.2em',
      paddingLeft: '0.3em',
      paddingRight: '0.3em',
     
    };

    return (
      <div className="event" style={eventStyle}>
        <div>{arg.event.title}</div>
      </div>
    );
  };

  const getColorBasedOnPriority = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Mid':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'gray';
    }
  };
  

  return (
    <div style={CalendarStyles}>
      <SelectLabels style={selectStyles} onCalendarViewChange={handleViewChange} />
      <FullCalendar
        eventOverlap= {false} 
        selectOverlap= {false}  
        plugins={[dayGridPlugin]}
        initialView={currentView}
        ref={calendarRef}
        events={worktasks}
        displayEventTime={false}
        height="100%"
        buttonText={
          {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
          }

        }

        eventContent={eventContent}
        dayHeaderContent={dayHeaderContent}
      />
    </div>
  );
};
