import React, { Component } from 'react';

class Key extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {props, props: { value }} = this;
        return (
            <div>
                <button {...props}>{value}</button>
            </div>
        );
    }
}
 
export default Key;