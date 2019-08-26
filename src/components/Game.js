import React from "react";
import Navbar from "./Navbar";
import ScoreBar from "./ScoreBar";
import GameField from "./GameField";
import chars from "./chars.js";
import "./Char.css"

class Game extends React.Component {

    state = {
        score: 0,
        topScore: 0,
    
    messageColor: '',
    messageText: 'Click a picture to begin. Click a new picture each time to reach a high score!',
    allChars: this.shuffleArray(),
    wasClicked:[],
    shake:false
    };

    clickEvent = this.checkClicked.bind(this);

    shuffleArray() {
        const newArr = chars.slice();
        const shuffleArr = [];
        while (newArr.length > 0) {
            shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
        }
        return shuffleArr;
    }

    checkClicked(clickedItem) {
        const prevState = this.state.wasClicked.slice();
        const shuffled = this.shuffleArray();

        let score = this.state.score;
        let topScore = this.state.topScore;

        if (!this.state.wasClicked.includes(clickedItem)) {
            if (score === topScore) {
                score++;
                topScore++;
            } else {
                score++;
            }
            prevState.push(clickedItem);
        }   
        if (this.state.wasClicked.includes(clickedItem)) {
            let score = 0;
            return this.setState({
                score: score,
                topScore: topScore,
                messageColor: 'incorrect',
                messageText: 'Incorrect!',
                allCharacters: shuffled,
                wasClicked: [0],
                shake: true
            });
        }
        this.setState({
            score: score,
            topScore: topScore,
            messageColor: 'correct',
            messageText: 'Correct!',
            allCharacters: shuffled,
            wasClicked: prevState,
            shake: false
        });

        return setTimeout(() => this.setState({ messageColor: ''}), 500);
    }
    
    render() {
        const state = this.state;
        return (
            <div>
                <Navbar />
                <ScoreBar
                    score = {state.score}
                    topScore = {state.topScore}
                    messageColor = {state.messageColor}
                    messageText = {state.messageText}
                />
                <div className="container">
                    <GameField
                    shake={state.shake}
                    chars={state.allChars}
                    clickEvent={this.clickEvent}
                    />
                </div>
                {/* Footer */}
            </div>
        )
    }

};

export default Game;