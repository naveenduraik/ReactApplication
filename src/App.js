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
      <Greet name = "Bruce"  heroName = "Batman">
        <p>This is a children props</p>
      </Greet>
      <Greet name = "Clarke" heroName ="SuperMan" >
        <button>Action</button>
      </Greet>
      <Greet name = "Diana" heroName = "WonderWoman"/>
      <Welcome name = "Bruce" heroName = "BatMan" />
      <Welcome name = "Clark" heroName = "SuperMan" />
      <Welcome name = "Diana" heroName = "WonderWoman" />
      
    </div>
  );
}

export default App;
