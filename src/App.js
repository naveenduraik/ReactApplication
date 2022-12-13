import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome  from './components/Welcome';

import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
     {/* <Greet />    
      <Welcome /> */}
      {/* <Hello /> */}
      <Greet name = "Bruce"  heroName = "Batman" />
      <Greet name = "Clarke" heroName ="SuperMan" />
      <Greet name = "Diana" heroName = "WonderWoman"/>
      
    </div>
  );
}

export default App;
