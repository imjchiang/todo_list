import React, { Component } from 'react';
import './App.css';
import ListItems from "./Components/ListItem"

class MyList extends Component 
{
    render() 
    {
        return(
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    <ListItems doThis="Buy ice cream" />
                    <ListItems doThis="Eat pizza" />
                    <ListItems doThis="Drink Soda" />
                </ul>
            </div>
        )
    }
}

export default MyList;