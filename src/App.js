import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className = 'container-fluid'>
      <h1 className = 'text-center'>Contact Management System</h1>
      <div className = 'row'>
        <div className = 'col'>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
