import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navBar';
import Home from './components/home/home';
import MakeHamraza from './components/makeHamraza/makeHamraza';
import PageNotFound from './components/pageNotFound';
import GetOut from './components/getOut/getout';

// Renders the diffrent routes- being renderd by index.js

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
                <NavBar/>
                <Switch>
                    <Route path="/" component= {Home} exact={true} />
                    <Route path="/getout"  component={GetOut} />
                    <Route path="/makehamraza"  component={MakeHamraza} />
                    <Route component= {PageNotFound} />  
                
                </Switch>
        </div>
        </BrowserRouter>
    );
}

export default AppRouter;