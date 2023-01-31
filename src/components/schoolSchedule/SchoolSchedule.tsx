import {days, schedule} from '../../constants';
import {SchoolDay} from '../schoolDay';
import {SchoolWeek} from '../schoolWeek';

export const SchoolSchedule = () => {
    const data = Object.entries(schedule);

    return (
      <div
        className={'w-full h-full border border-black grid overflow-x-auto styled-scrollbar grid grid-cols-[50px] auto-cols-min grid-flow-col relative grid-rows-[40px]'}>
        {data.map(([classID, classWeekSchedule], index) => {
          if (index === 0) {
            return (
              <>
                <div className={'bg-red sticky left-0 z-10'}/>
                <div className={'h-full bg-red sticky left-0 z-10 relative row-start-2'}>
                  {days.map((day) => {
                    return <div>{day.slice(0, 2)}</div>
                  })}
                </div>
              </>
            )
          }
          return (
            <SchoolWeek classID={classID}>
              {classWeekSchedule.map((lessons) => {
                return <SchoolDay lessons={lessons}/>;
              })}
            </SchoolWeek>
          );
        })}
      </div>
    );
  }
;
