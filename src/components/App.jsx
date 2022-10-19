import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './Contact-list/ContactList';
import { Box } from '../components/Box/box.styled';
import PhoneboockForm from './Form/phoneboock-form';
import SearchInput from './Search-input/SearchInput';
import initialnumbers from '../data/initial-numbers.json'

class App extends Component {
  state = {
    numberList: initialnumbers,
    filter: '',
  };

  componentDidMount() {
    const numberList = localStorage.getItem('numberList');
    numberList && this.setState({ numberList: JSON.parse(numberList) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.numberList === prevState.numberList) {
      return;
    }
    localStorage.setItem('numberList', JSON.stringify(this.state.numberList));
  }

  deleteItem = id => {
    this.setState(prevState => ({
      numberList: prevState.numberList.filter(num => num.id !== id),
    }));
  };

  filterSet = data => {
    this.setState({
      filter: data,
    });
  };

  dataSet = data => {
    const initState = this.state.numberList;
    const userId = nanoid();
    const user = {
      id: userId,
      name: data.name,
      tel: data.tel,
    };

    if (initState.find(i => i.name === user.name || i.tel === user.tel)) {
      return alert(`this name or number is already used`);
    }
    return this.setState(prevState => ({
      numberList: [user, ...prevState.numberList],
    }));
  };

  render() {
    const numberList = this.state.numberList;
    const filterValue = this.state.filter.toLowerCase();
    const filtredList = numberList.filter(num =>
      num.name.toLowerCase().includes(filterValue)
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Box>
          <PhoneboockForm onSubmit={this.dataSet} />
        </Box>
        {this.state.numberList.length > 0 && (
          <Box>
            <SearchInput onSearch={this.filterSet} />
            <ContactList
              numberList={filtredList}
              onDeleteItem={this.deleteItem}
            />
          </Box>
        )}
      </div>
    );
  }
}

export default App;
