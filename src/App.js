import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome  from './components/Welcome';
import Message from './components/Message';

import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
     {/* <Greet />    
      <Welcome /> */}
      {/* <Hello /> */}
      <Greet name = "Bruce"  heroName = "Batman">
        <p>This is a greeting children props</p>
      </Greet>
      <Greet name = "Clarke" heroName ="SuperMan" >
        <button>Action</button>
      </Greet>
      <Greet name = "Diana" heroName = "WonderWoman"/>
      <Welcome name = "Bruce" heroName = "BatMan" >
        <p>This is a welcome children props</p>
      </Welcome>
      <Welcome name = "Clark" heroName = "SuperMan" >
        <button>Action</button>
      </Welcome>
      <Welcome name = "Diana" heroName = "WonderWoman" />
      <Message />
      
    </div>
  );
}

export default App;
