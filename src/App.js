import logo from './logo.svg';
import './App.css';
import Success from './Success';
import LogIn from './LogIn';

import SignUp from './SignUp';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';
 
function App() {
  return (

    <>
    <Container maxWidth='md'>
    <div className="App">
     <Router>
       <Switch>
        <Route path="/" exact component={SignUp}/>
        <Route path="/LogIn" exact component={LogIn}/>
        <Route path="/Success" exact component={Success}/>
      
        
      
        </Switch>
        </Router>


    </div>
    </Container>
    </>
  );
}

export default App;
