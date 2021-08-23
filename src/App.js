import React, { Component } from 'react'
import { BrowserRouter as Router,Route,withRouter,Switch , Fragment} from 'react-router-dom';


import  Brisban from './Brisban'   
import  Entry from './Entry'  
import  Melbourne from './Melbourne'  
import  Sydney from './Sydney'  


 class App extends Component {
    render() {
        return (
           
            <Router>
 <div>
    <Route path="/" component={Entry} />
    <Route path="/Brisban" component={Brisban} />
    <Route path="/Melbourne" component={Melbourne} />
    <Route path="/Sydney" component={Sydney} />
    </div>
</Router>

        )
    }
}
export default withRouter(App); 
