import React from 'react';
import Login from '../component/Login';

export default ({ logged }) => <h1>{logged ? 'Panel' : <Login />}</h1>;
