import React, { Component } from 'react';

class Hello extends Component {
    render() {
        var place ="everybody";
        return (
            <h1>Hello {place}</h1>
            );
    }
}

// Parent Component
class GroceryList extends Component {
    render() {
        return (
                <ul>
                    <ListItem quantity="1" name="bread" />
                    <ListItem quantity="6" name="Eggs" />
                    <ListItem quantity="2" name="Milk" />
                </ul>
               );
    }
}

// Child Component
class ListItem extends Component {
    render() {
        return (
                <li>
                    {this.props.quantity}x {this.props.name}
                </li>
               );
    }
}


//React.render(<Hello />, document.getElementById('root'));
React.render(<GroceryList />, document.getElementById('root'));
