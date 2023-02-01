import { days, schedule } from '../../constants';
import { SchoolWeek } from '../schoolWeek';
import styles from './SchoolSchedule.module.css';
import clsx from "clsx";


export const SchoolSchedule = () => {
  const classes = Object.keys(schedule);
  const schoolDays = Object.values(schedule);

  return (
    <div className={styles.container}>
      <div className={clsx(styles.scheduleWrapper, 'styled-scrollbar')}>
        <div className={styles.plug}>
        </div>
        <div className={styles.classIdsWrapper}>
          {classes.map((classId) => <div>{classId}</div>)}
        </div>
        <div className={styles.daysWrapper}>
          {days.map((day, index) => (
            <div
              className={clsx(styles.dayMarker, index % 2 ? 'day-blue' : 'day-green')}
              key={day}
            >
              {day.slice(0, 3).toUpperCase()}
            </div>
          ))}
        </div>
        <div className={styles.schoolDayWrapper}>
          {schoolDays.map((classWeekSchedule) => (
            <SchoolWeek classWeekSchedule={classWeekSchedule} />
          ))}
        </div>
      </div>
    </div>
  );
};
