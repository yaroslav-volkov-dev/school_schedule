import { SchoolWeekSchedule } from "commonTypes/dataTypes";
import { SchoolDay } from "../schoolDay";

type SchoolWeekProps = {
  classWeekSchedule: SchoolWeekSchedule;
}

export const SchoolWeek = ({ classWeekSchedule }: SchoolWeekProps) => {

  return (
    <>
      {classWeekSchedule.map((lessons, index) => (
        <SchoolDay
          lessons={lessons}
          backgroundColor={index % 2 ? 'blue' : 'green'}
        />
      ))}
    </>
  );
};
