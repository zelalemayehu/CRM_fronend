import logo from './logo.svg';
import './App.css';
import Profile from './ProfileRegistration';


function App() {
  return (
    <div className = 'container-fluid'>
      <h1 className = 'text-center'>Simple React App</h1>
      <div className = 'row'>
        <div className = 'col-4'>
          <Profile />
        </div>
      </div>
    </div>
   );
}

export default App;
