import React from 'react';

class Counter extends React.Component {
    state = {
        counter: 0
    }

    handIncrementClick = () => {  
        //Working 👍    
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        //If the state is based on the previous state
        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <h2>The counter is {counter}</h2>
                <button onClick={this.handIncrementClick}>+</button>
            </div>
        )
    }
}

export default Counter;