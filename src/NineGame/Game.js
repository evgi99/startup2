/**
 * Created by Evgi on 10/24/2017.
 */
import React from 'react';
import Divider from 'material-ui/Divider';
import ButtonsFrame from './/ButtonsFrame'
import StarsFrame from './/StarsFrame'
import NumbersFrame from './/NumberFrame'
import AnswerFrame from './/AnswerFrame'

import RaisedButton from 'material-ui/RaisedButton';
import Autorenew from 'material-ui/svg-icons/action/autorenew'
import '../styles/nineGameStyle.css'

export default class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {selectedNumbers: [],
            numberOfStars: Math.floor((Math.random() * 9) + 1),
            correct: null,
            alradyUsedNumbers: []
        }

        this.clickOnNumber = this.clickOnNumber.bind(this);
        this.clickOnEqual = this.clickOnEqual.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.refreshGame = this.refreshGame.bind(this);
    }

    clickOnNumber(clickedValue){
        if(this.state.selectedNumbers.indexOf(clickedValue) < 0 ){
            this.setState(
                {selectedNumbers: this.state.selectedNumbers.concat(clickedValue), correct: null}
            )
        }
    }

    clickOnNumberInAnswerFrame(clickedValue) {
        var newSelected = this.state.selectedNumbers.filter(val => val != clickedValue);
        this.setState(
            {selectedNumbers: newSelected, correct: null}
        );
    }

    clickOnEqual() {
        var sum = this.state.selectedNumbers.reduce(function (a, b) { return a + b;}, 0);
        var isCorrect = this.state.numberOfStars == sum;
        this.setState({correct: isCorrect})
    }

    acceptAnswer() {
        var newUsed = this.state.alradyUsedNumbers.concat(this.state.selectedNumbers)
        this.setState({
            selectedNumbers: [],
            alradyUsedNumbers: newUsed,
            correct: null,
            numberOfStars:  Math.floor((Math.random() * 9) + 1)
        })
    }

    refreshGame() {
        this.setState({
            selectedNumbers: [],
            alradyUsedNumbers: [],
            correct: null,
            numberOfStars:  Math.floor((Math.random() * 9) + 1)
        })
    }

    render() {
        var selectedNumbers = this.state.selectedNumbers;
        return (
            <div id="game">
                <h2 className="game-title">Play nine</h2>
                <Divider/>
                <div className="refreshbutton-frame">
                    <RaisedButton
                              onClick ={this.refreshGame}
                              icon={<Autorenew/>}/>
                </div>
                <StarsFrame numberOfStars1 = {this.state.numberOfStars}/>
                <div className="gameheart">
                    <NumbersFrame property2={selectedNumbers}
                                  clickNumber = {this.clickOnNumber}
                                  alreadyUsed = {this.state.alradyUsedNumbers}/>

                    <AnswerFrame property1={selectedNumbers}
                                 clickWrongAnswer = {this.clickOnNumberInAnswerFrame.bind(this)}/>
                </div>
                <ButtonsFrame property3 = {selectedNumbers}
                              isCorrect = {this.state.correct}
                              afterClick={this.clickOnEqual}
                              acceptAnswerFunction = {this.acceptAnswer}
                              refreshGame = {this.refreshGame}/>


            </div>
        )
    }
};