import React, {Component} from "react";
import { nanoid } from 'nanoid';
import {ContactList} from "./Contact-list/ContactList";
import {Box} from "../components/Box/box.styled";
import PhoneboockForm from "./Form/phoneboock-form";
import SearchInput from "./Search-input/SearchInput";

class App extends Component {
state = {
  numberList: [
    {id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', tel: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', tel: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', tel: '227-91-26'},
  ],
  filter: '',
}

deleteItem = id => {
  this.setState(prevState => ({
    numberList: prevState.numberList.filter(num => num.id !== id)
  }))
}

filterSet = data => {
this.setState({
  filter: data,
})
}

dataSet = data => {
const initState = this.state.numberList;
const userId = nanoid();
const user = {
  id: userId,
  name: data.name,
  tel: data.tel,
};

if (initState.find(i => i.name === user.name || i.tel === user.tel)) {
  return alert(`this name or number is already used`)
} return this.setState(prevState => ({
  numberList: [user, ...prevState.numberList]
}))
};


render() {

  const numberList = this.state.numberList;
  const filterValue =  this.state.filter.toLowerCase();
  const filtredList = numberList.filter(num => num.name.toLowerCase().includes(filterValue));

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Box>
      <PhoneboockForm onSubmit={this.dataSet}/>
      </Box>
      {this.state.numberList.length > 0 && (
        <Box>
          <SearchInput onSearch={this.filterSet}/>
        <ContactList numberList={filtredList} onDeleteItem={this.deleteItem}/>
        </Box>
      )}
    </div>
  );
}
};

export default App;