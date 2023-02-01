import { SchoolWeekSchedule } from "commonTypes/dataTypes";
import { SchoolDay } from "../schoolDay";

type SchoolWeekProps = {
  classWeekSchedule: SchoolWeekSchedule;
}

export const SchoolWeek = ({ classWeekSchedule }: SchoolWeekProps) => {

  return (
    <>
      {classWeekSchedule.map((lessons) => <SchoolDay lessons={lessons} />)}
    </>
  );
};
