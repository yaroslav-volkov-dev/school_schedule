import './App.css';
import { schedule } from './constants';
import { SchoolSchedule } from 'components';


const App = () => {
  return (
    <div className="App">
      <div className={'container mx-auto px-20 py-2 h-screen'}>
        <SchoolSchedule />
      </div>
    </div>
  );
};

export default App;
