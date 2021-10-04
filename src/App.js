import Covid_Data from './component/Covid_Data';
import './App.css';
import State_wise from './component/State_wise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Covid_Data /> */}
        <State_wise />
      </header>
    </div>
  );
}

export default App;
