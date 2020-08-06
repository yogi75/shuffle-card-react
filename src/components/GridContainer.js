import React, { Component } from 'react';
import CardContainer from "./CardContainer";

class GridContainer extends Component {
    constructor() {
        super();
        this.state = {
            number: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    shuffleArray = () => {
        const { number } = this.state;
        const shuffledArray = this.shuffle(number);
        this.setState({
            number: shuffledArray
        })
    }

    sortArray = () => {
        const { number } = this.state;
        number.sort((a, b) => a - b);
        this.setState({
            number: number
        })
    }
    render() {
        const { number } = this.state;
        return (
            <div className="grid-container">
                <div className="button-container">
                    <button className="shuffle" onClick={() => this.shuffleArray()}>Shuffle</button>
                    <button className="sort" onClick={() => this.sortArray()}>Sort</button>
                </div>
                <CardContainer number={number} />
            </div>
        )
    }

}

export default GridContainer;
