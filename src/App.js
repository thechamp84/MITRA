import React from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
import LoginLayoutRoute from "./layouts/LoginLayoutRoute";  
import  {Home, About, Contact, ListYourProperty, ManageProperty}  from "./pages";
import './global.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'; 
import { create } from 'jss';
import rtl from 'jss-rtl';


const App = () => {  

const myStates = useSelector((state) => state.changeDirection);
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const CustomTheme = createMuiTheme({
  direction: myStates
});  

    return ( 
      <StylesProvider jss={jss}> 
      <ThemeProvider theme={CustomTheme}>
      <Router>  
        <Switch>  
          <Route exact path="/"><Redirect to='/home' /></Route>  
          <LoginLayoutRoute exact path='/home' component={Home} />
          <LoginLayoutRoute exact path="/about" component={About} />
          <LoginLayoutRoute exact path="/contact" component={Contact} /> 
          <LoginLayoutRoute exact path="/manageyourproperty" component={ManageProperty} />
          <LoginLayoutRoute exact path="/listyourproperty" component={ListYourProperty} /> 
        </Switch>  
      </Router> 
      </ThemeProvider>
    </StylesProvider> 
    );  
}  
  
export default App;  