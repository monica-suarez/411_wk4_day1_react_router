/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Car from '../src/components/Car'
// import { BrowserRouter } from 'react-router-dom'

// Write component imports here //

const Router = () =>{
return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/car/:id' component={Car}/>
        </Switch>  
);
}

export default Router