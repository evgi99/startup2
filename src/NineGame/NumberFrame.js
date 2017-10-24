/**
 * Created by Evgi on 10/24/2017.
 */
import React from 'react'

export default class NumbersFrame extends React.Component{
    render() {
        var numbers = [];
        var onClickLocalFunction = this.props.clickNumber;
        var alreadySelected = this.props.property2;
        var alreadyUsedNumbers = this.props.alreadyUsed;
        var isAlreadyUsed = function(i){
            return alreadyUsedNumbers.indexOf(i) >= 0 ;
        }
        var isAlreadySelected = function (i) {
            return alreadySelected.indexOf(i) >= 0 ;
        }
        for (var i = 1; i < 10; i++) {
            var className2 = "number selected-" +  (isAlreadyUsed(i) || isAlreadySelected(i));
            numbers.push(
                <div key={i} className={className2} onClick={onClickLocalFunction.bind(null,i)}>{i}</div>
            );
        }
        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        )
    }
};

