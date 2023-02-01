import { SchoolWeekSchedule } from "commonTypes/dataTypes";
import { SchoolDay } from "../schoolDay";
import styles from './SchoolWeek.module.css';

type SchoolWeekProps = {
  classID: string;
  classWeekSchedule: SchoolWeekSchedule;
  isLastClass: boolean;
}

export const SchoolWeek = ({ classID, classWeekSchedule, isLastClass }: SchoolWeekProps) => {
  console.log(isLastClass, classID);

  return (
    <>
      <div className={styles.classID}>{classID}</div>
      {classWeekSchedule.map((lessons) => <SchoolDay lessons={lessons} isLastClass={isLastClass} />)}
    </>
  );
};
