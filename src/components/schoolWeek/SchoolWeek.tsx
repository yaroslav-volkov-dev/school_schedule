import {WithChildren} from 'commonTypes/utility';

type SchoolWeekProps = {
  classID: string;
}

export const SchoolWeek = ({classID, children}: WithChildren<SchoolWeekProps>) => {
  return (
    <div className={'h-full w-72 flex flex-col shrink-0 row-span-2'}>
      <div className={'h-10 bg-blue shrink-0 sticky top-0 flex justify-center items-center'}>{classID}</div>
      {children}
    </div>
  );
};
