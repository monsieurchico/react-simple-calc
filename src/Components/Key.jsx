import React, { Component } from 'react';

const Key = (props) => (
    <div>
        <button {...props}>{props.value}</button>
    </div>
);

export default Key;