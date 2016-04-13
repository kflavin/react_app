import React, {Component, PropTypes} from 'react';
//import { render } from 'react-dom';

class ContactsApp extends Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        }
    }
    render() {
        return (
                <div>
                    <SearchBar filterText={this.state.filterText} />
                    <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
                </div>
               )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component {
    render() {
        return <input type="search" placeholder="search" value={this.props.filterText} />
    }
}

class ContactList extends Component {
    render() {
        let filterContacts = this.props.contacts.filter(
                (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );
        return (
                <ul>
                    {filterContacts.map(
                        (contact) => <ContactItem key={contact.email}
                                                  name={contact.name}
                                                  email={contact.email} />
                        )}
                    </ul>
               )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,

}

let contacts = [
    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
    { name: "Dan Abramov", email: "gaearon@somewhere.com"},
    { name: "Pete Hunt", email: "floydophone@somewhere.com"},
]

React.render(<ContactsApp contacts={contacts} />, document.getElementById('root'));
