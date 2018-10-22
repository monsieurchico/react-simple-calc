import React, { Component } from 'react';

class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    static getDerivedStateFromProps = ({ operation = null, result = null },  { list }) => {
        console.log({ operation, result })
        if (operation && result) {
            list.push({ operation, result })
        }
        return { list }
    }   

    createResultsTable = () => {
        const arr = [];

        const {state: { list: data }} = this;

        let index = 100;
        data.map((item) => {
            const { result, operation } = item
            index++;
            arr.push(
                <tr key={index}>
                    <td>{operation}</td>
                    <td>{result}</td>
                </tr>
            );
        })

        return arr;
    }

    render() { 
        return (
            <div>
                <b>Last operations</b>
                <table key="h" border="1">
                    <thead>
                        <tr>
                            <th>Operations</th>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createResultsTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default HistoryList;