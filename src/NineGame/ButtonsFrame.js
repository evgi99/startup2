/**
 * Created by Evgi on 10/24/2017.
 */
import React from 'react';
import Autorenew from 'material-ui/svg-icons/action/autorenew'
import Accept from 'material-ui/svg-icons/action/done'
import Error from 'material-ui/svg-icons/alert/error'
import RaisedButton from 'material-ui/RaisedButton';


export default class ButtonsFrame extends React.Component{
    render() {
        var isalreadySelected = this.props.property3.length == 0;
        var isCorrect = this.props.isCorrect;
        var button;
        switch (isCorrect) {
            case true:
                button = (
                    <RaisedButton onClick={this.props.acceptAnswerFunction}
                                  primary = {true} icon={<Accept/>}
                    />
                )
                break;
            case false:
                button = (
                    <RaisedButton secondary={true}
                                  icon={<Error/>}
                    />
                )
                break;
            default:
                button = (
                    <RaisedButton disabled={isalreadySelected}
                                  label="="
                                  onClick ={this.props.afterClick}/>
                )
        }

        return (
            <div id="button-frame">
                {button}

                <br/><br/>
                <RaisedButton onClick ={this.props.refreshGame}
                              icon={<Autorenew/>}/>

            </div>
        )
    }
};


