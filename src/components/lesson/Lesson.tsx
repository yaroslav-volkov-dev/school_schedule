import { ReactNode } from 'react';

type LessonProps = {
  classRoomNumber?: string;
  children?: ReactNode;
  className?: string;
}

export const Lesson = ({ children, className, classRoomNumber = '-' }: LessonProps) => {
  return (
    <div className={`flex ${className}`}>
      <div className={'bg-light-blue grow'}>
        {children}
      </div>
      <div className={'ml-2 px-2 bg-light-blue'}>{classRoomNumber}</div>
    </div>
  );
};
