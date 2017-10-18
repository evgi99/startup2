/**
 * Created by Evgi on 10/17/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render () {
        return (
            <div>
                something from react 2
            </div>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById("root"));