/**
 * Created by Evgi on 10/17/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/titles.css'
import Mytabs from "./Template/Tabs";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <div className="main-title">
                        Startup Project
                    </div>
                    <Mytabs/>
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById("root"));