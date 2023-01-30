import { WithChildren } from 'commonTypes/utility';

type SchoolWeekProps = {
  classID: string;
}

export const SchoolWeek = ({ classID, children }: WithChildren<SchoolWeekProps>) => {
  return (
    <div className={'h-full w-72 flex flex-col gap-y-3 shrink-0'}>
      <div className={'h-10 bg-blue shrink-0'}>{classID}</div>
      {children}
    </div>
  );
};
