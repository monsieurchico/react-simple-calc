import React, { Component } from 'react';
import {
  Keypad, OperationScreen, HistoryList
} from './Components';
import './App.css';
import { resolve } from './Resolver/OperationResolver';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operation: '',
      hasError: false,
      history: []
    }
  }

  onKeypadClickHandler = (value) => {
    let setStateCallback = (state) => {
      const { hasError, operation, history } = state;
      
      if ('=' === value) {
        try {
          const newResult = resolve(operation)
          history.push({
            operation: operation,
            result: newResult
          })
          
          return {
            operation: '',
            history
          }
        } catch (e) {
          return {
            operation: 'Err',
            history,
            hasError: true
          }
        }
      }

      if (!hasError) {
        return { operation: `${operation}${value}` }
      }
      
      return {
        hasError: false,
        operation: value
      }
    }

    this.setState(
      setStateCallback, 
      () => { console.log('state updated to', this.state) }
    );
  }

  render() {
    const { onKeypadClickHandler, state: { hasError, operation, history }} = this
    return (
      <div>
        <OperationScreen value={operation} className={hasError ? 'has-error': ''} />
        <Keypad onKeyClickCallback={onKeypadClickHandler} />
        <HistoryList history={history} />
      </div>
    );
  }
}

export default App;
