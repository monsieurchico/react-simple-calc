import React, { Component } from 'react';
import Key from './Key';

class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastKeyClicked: null
        }
    }

    onKeyClick = (e) => {
        const {target: {value}} = e;
        const {props: {onKeyClickCallback}} = this

        this.setState(() => {
            return { lastKeyClicked: value }
        }, () => {
            onKeyClickCallback(this.state.lastKeyClicked);    
        })        
    }

    render() { 
        const {onKeyClick} = this
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><Key onClick={onKeyClick} value="7"/></td>
                            <td><Key onClick={onKeyClick} value="8"/></td>
                            <td><Key onClick={onKeyClick} value="9"/></td>
                            <td><Key onClick={onKeyClick} value="*"/></td>
                        </tr>
                        <tr>
                            <td><Key onClick={onKeyClick} value="4"/></td>
                            <td><Key onClick={onKeyClick} value="5"/></td>
                            <td><Key onClick={onKeyClick} value="6"/></td>
                            <td><Key onClick={onKeyClick} value="/"/></td>
                        </tr>
                        <tr>
                            <td><Key onClick={onKeyClick} value="1"/></td>
                            <td><Key onClick={onKeyClick} value="2"/></td>
                            <td><Key onClick={onKeyClick} value="3"/></td>
                            <td><Key onClick={onKeyClick} value="+"/></td>
                        </tr>
                        <tr>
                            <td><Key onClick={onKeyClick} value="0"/></td>
                            <td><Key onClick={onKeyClick} value="."/></td>
                            <td><Key onClick={onKeyClick} value="-"/></td>
                            <td><Key onClick={onKeyClick} value="="/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Keypad;