
import './App.css';

const Person = (props) => {

  return(
    <>
      <h5>Name: {props.name}</h5>
      <h5>Last name: {props.lastname}</h5>
      <h5>Age = {props.age}</h5>
    </>
  
  )

}

const App = () => {
  let name = "John";
  const isNameShowing = true;
  const isUserLoggedIn = true;

  return (
    <div className="App">
      
      <h1>Hello, {isNameShowing ? name : "someone"}!</h1>
      {isUserLoggedIn && isNameShowing ?
    (
      <>
      //you can use only string but for dynamic use curly braces 
      <Person name = "John" lastname = "Doe" age = {23+2}/>
      <Person name = "Ryan" lastname = "Hassan" age = "26"/>
      
      
      </>
    ) :
    (
      <>
      <h2>
        You're not logged in!
        
      </h2>
      <h3>Please log in</h3>
      </>
    ) 
    }
   
    </div>
    
  );
}

export default App;
