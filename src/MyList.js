import React, { Component } from 'react';
import './App.css';
import ListItem from "./Components/ListItem"

class MyList extends Component 
{
    constructor(props)
    {
        super();
        this.state = 
        {
            toDoItemArray: props.theList
        }
    }

    clearList = e =>
    {
        this.setState(
        {
            toDoItemArray: []
        });
    }

    render() 
    {
        let todoItems = this.state.toDoItemArray.map((item, index) =>
        (
            <ListItem doThis={item} key={index} />
        ));
        return(
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    {todoItems}
                </ul>
                <button onClick={(e) => this.clearList(e)}>Finished the List!</button>
            </div>
        )
    }
}

export default MyList;