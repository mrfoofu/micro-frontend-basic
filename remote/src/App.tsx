import React from 'react';
import Button from './components/Button';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Remote</Title>
        <Button text='Dobby' />
        asdsada
      </header>
    </div>
  );
}

// Demo Stuff

/*
  TS DEFINITIONS
  ----------------------
 */
interface MyProps {
  name: string;
}

type MyComponentProps = {
  initialCount: number;
  name: string;
};

type MyState = {
  count: number;
};


/*
  JSX EXAMPLES
  ----------------------------
 */

// Simple JSX Example - Embedding Expressions in JSX
const name = "Tony Sun";

// Expressions can be embedded in JSX by wrapping them in curly braces.
// Similiar to template literals in JS
const element = <h1>Hello, {name}</h1>;

// className is used instead of class in JSX
const element2 = <h1 className="greeting">Hello, world!</h1>;

// JSX Fragments
function FragmentExample() {
  return (
    <Fragment>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </Fragment>
  );
}

// Conditional Rendering in JSX
const isLoggedIn = true;
const greeting = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;

// Example of conditional rendering using logical && operator
const user = {
  name: "Tony",
  age: 18,
};

const userInfo = (
  <div>
    <h2>User Information</h2>
    {user.name && <p>Name: {user.name}</p>}
    {user.age && <p>Age: {user.age} sda</p>}
  </div>
);

// Mapping Arrays to JSX
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);



/*
  FUNCTIONAL COMPONENT
  --------------------
 */


// Basic Functional Component
function MyFunctionalComponent(props: MyProps) {
  return <h1>Hello, {props.name}</h1>;
}

// Functional Component with State and Props
const MyFunctionalComponent2: React.FC<MyComponentProps> = ({
  name,
}): React.JSX.Element => {
  // Easiest way to declare a Functional Component; return type is inferred.
  // Annotate the return type so an error is raised if you accidentally return some other type

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};


/*
  CLASS COMPONENT
  ---------------
 */


// Basic Class Component
class MyClassComponentBasic extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

// Basic Class Component with State and Props
class MyClassComponentWithProps extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <h1>
        Hello, {this.props.name} {this.state.count}
      </h1>
    );
  }
}

export default App;
