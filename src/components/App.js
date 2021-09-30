import React, { Component } from "react";
import style from "./App.module.css";
import DataInput from "./dataInput/DataInput";
import Contacts from "./contacts/Contacts";
import Section from "./section/Section";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  isContactExist = (name) =>
    this.state.contacts.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

  filterInputHandler = () =>
    this.state.contacts.filter((item) =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  setFilter = (e) => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  addUser = (user) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, user],
    }));
  };

  removeUser = (id) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  render() {
    return (
      <div className={style.app}>
        <Section title="Phonebook">
          <DataInput
            addUser={this.addUser}
            isContactExist={this.isContactExist}
          />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} setFilter={this.setFilter} />
          <Contacts
            contact={this.state.contacts}
            filterInputHandler={this.filterInputHandler()}
            removeUser={this.removeUser}
          />
        </Section>
      </div>
    );
  }
}

export default App;
