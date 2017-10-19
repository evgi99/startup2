/**
 * Created by Evgi on 10/17/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/titles.css'

export default class App extends React.Component {
    render () {
        return (
            <div>
                <p className="main-title">
                    Startup Project
                </p>
            </div>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById("root"));