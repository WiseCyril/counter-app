import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 3},
            {id: 2, value: 4},
            {id: 3, value: 3},
            {id: 4, value: 2},
            {id: 5, value: 1}
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
    }
 
    render() {
        return ( 
            <div>
                {this.state.counters.map(counter => 
                    (<Counter 
                        key = {counter.id} 
                        counter={counter}
                        onDelete= {this.handleDelete}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;