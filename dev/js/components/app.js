/**
 * Created by PC on 6/20/2017.
 */
import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';
require('../../scss/style.scss');

//The place to collect all the child component
const App = () =>(

    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetails/>
    </div>
);

export default App;