import { schedule } from '../../constants';
import { SchoolDay } from '../schoolDay';
import { SchoolWeek } from '../schoolWeek';

export const SchoolSchedule = () => {
  const data = Object.entries(schedule);

  return (
    <div className={'w-full h-full border border-black flex overflow-x-auto gap-x-2 p-3 styled-scrollbar'}>
      {data.map(([classID, classWeekSchedule]) => {
        return (
          <SchoolWeek classID={classID}>
            {classWeekSchedule.map((lessons) => {
              return <SchoolDay lessons={lessons} />;
            })}
          </SchoolWeek>
        );
      })}
    </div>
  );
};
