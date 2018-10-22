import React, { Component } from 'react';

class OperationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const { props } = this
        return (
            <div>
                <input {...props} disabled/>
            </div>
        );
    }
}
 
export default OperationScreen;