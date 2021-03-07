import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Welcome from './components/Welcome';
import User from './components/User';
import Heading from './components/Heading';
import LoggedUser from './components/LoggedUser';
import Counter from './components/Counter';
import List from './components/List';

const statement = <h1> 🥁 React is cool 🥁 </h1>
const student = {
  firstName: 'Lúcia',
  lastName: 'Duarte'
}

function getDateTime() {
  return `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`; 
}

function App() {
  return (
    <div className="App">
      {/* {statement}
      <h3>
        Hi, {student.firstName} {student.lastName}
      </h3>
      {getDateTime()}
      <div>
        <img src={logo} />
        <img src="https://placekitten.com/200/300"></img>
      </div>
      <button>Dummy</button>
       <About /> */}
       {/* <Welcome /> */}

       {/* Props */}
       {/* <LoggedUser />
       <Counter />
       <Welcome username="Miguel" />
       <User user="Miguel" someThing={2} age={21} />
       <User user="Laura"  age={22} />
       <User user="Guilherme" age={23} /> */}

       {/* Children */}
       {/* <Heading isRed>
         The weather is nice!
       </Heading> */}
       <List />
    </div>
  );
}

export default App;