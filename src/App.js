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
      <Greet name ="bruce" heroName = "Batman" />
      <Greet name ="clarke" heroName = "Superman"/>
      <Greet name = "diana" heroName = "WonderWoman" />  
      
    </div>
  );
}

export default App;
