import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "../src/components/start";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";


const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/start" component={Start} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
