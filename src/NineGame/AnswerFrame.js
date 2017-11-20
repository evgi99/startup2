/**
 * Created by Evgi on 10/24/2017.
 */
import React from 'react'

export default class AnswerFrame extends React.Component{
    render() {
        var numbers = [];
        var alreadySelected = this.props.property1;
        var unselectFunction = this.props.clickWrongAnswer;

        alreadySelected.forEach(function (selected) {
            numbers.push(
                <div key={selected} className="well">
                    <div className="number" onClick={unselectFunction.bind(null,selected)}>{selected}</div>
                </div>
            )
        });

        return (
            <div id="answer-frame">
                {numbers}
            </div>
        )
    }
};

