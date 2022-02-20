import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div>
      <NavbarComponent/>
        <div className="container"> 
            <h1>ยินดีต้อนรับ</h1>
        </div>
    </div>
  );
}

export default App;
