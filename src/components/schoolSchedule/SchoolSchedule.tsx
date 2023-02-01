import { days, schedule } from '../../constants';
import { SchoolWeek } from '../schoolWeek';
import styles from './SchoolSchedule.module.css';


export const SchoolSchedule = () => {
  const data = Object.entries(schedule);

  return (
    <div className={styles.container}>
      <div className={styles.scheduleWrapper}>
        {data.map(([classID, classWeekSchedule], index, array) => {

          if (index === 0) {
            return (
              <>
                <div className={styles.plug} />
                {days.map((day) => {
                  return <div className={styles.dayMarker} key={day}>{day.slice(0, 3).toUpperCase()}</div>;
                })}
              </>
            );
          }
          return (
            <SchoolWeek
              classID={classID}
              isLastClass={index === array.length - 1}
              classWeekSchedule={classWeekSchedule}
              key={classID}
            />
          );
        })}
      </div>
    </div>
  );
};
