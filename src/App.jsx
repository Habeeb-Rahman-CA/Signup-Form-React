import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
 //When click the logout button the data stored in the local storage will be removed
  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('You have been logged out');

  };
  return (
    <div className='card'>
      <h1>Registeration Form</h1>
      <Signup/>
      <Login/>
      <button className='logoutbtn' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default App
