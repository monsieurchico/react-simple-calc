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
      lastOperation: '',
      operation: '',
      result: null,
      hasError: false,
    }
  }

  onKeypadClickHandler = (value) => {
    let setStateCallback = (state) => {
      const { hasError, operation, lastOperation, result } = state;
      
      if ('=' === value) {
        try {
          return {
            operation: '',
            lastOperation: operation,
            result: resolve(operation),
            hasError: false,
          }
        } catch (e) {
          return {
            operation: 'Err',
            lastOperation,
            result: null,
            hasError: true,
          }
        }
      }

      if (!hasError) {
        return { 
          lastOperation,
          operation: `${operation}${value}`,
          result: null,
          hasError: false,
        }
      }
      
      return {
        lastOperation,
        operation: value,
        result: null,
        hasError: false,
      }
    }

    this.setState(
      setStateCallback, 
      () => { console.log('state updated to', this.state) }
    );
  }

  render() {
    const { onKeypadClickHandler, state: { hasError, operation, lastOperation, result }} = this
    return (
      <div>
        <OperationScreen value={operation} className={hasError ? 'has-error': ''} />
        <Keypad onKeyClickCallback={onKeypadClickHandler} />
        <HistoryList result={result} operation={lastOperation} />
      </div>
    );
  }
}

export default App;
