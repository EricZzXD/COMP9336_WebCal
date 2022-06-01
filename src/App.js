import React, {Component} from 'react';
import { Switch,  Route } from "react-router-dom";

import Dashboard from "./components/Dashboard"
import Lecture1_Cal from "./components/Lecture1_Cal";

class App extends Component{
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/Lecture1Cal' component={Lecture1_Cal}/>
                </Switch>
            </div>
        )
    }
}

export default App;