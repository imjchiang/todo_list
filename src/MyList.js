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
            toDoItemArray: props.theList,
            newItem: ""
        }
    }

    clearList(e)
    {
        console.log("Clearing List");
        this.setState(
        {
            toDoItemArray: []
        });
    }

    newItemChange(e)
    {
        this.setState(
        {
            newItem: e.target.value
        });
    }

    addItem(e)
    {
        e.preventDefault();
        const newArray = this.state.toDoItemArray;
        newArray.push(this.state.newItem);
        this.setState(
        {
            toDoItemArray: newArray,
            newItem: ""
        });
        console.log(this.state.toDoItemArray);
    }
    
    
    render() 
    {
        const todoItems = this.state.toDoItemArray.map((item, index) =>
        {
            return <ListItem doThis={item} key={index} />
        });
        
        return(
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    {todoItems}
                </ul>
                <form>
                    <input type="text" placeholder="Type an item here" onChange={(e) => this.newItemChange(e)} value={this.state.newItem} />
                    <button onClick={(e) => this.addItem(e)}>Add it!</button>
                </form>
                <button onClick={(e) => this.clearList(e)}>Finished the List!</button>
            </div>
        )
    }
}

export default MyList;