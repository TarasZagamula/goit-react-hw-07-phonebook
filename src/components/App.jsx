import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './Contact-list/ContactList';
import { Box } from '../components/Box/box.styled';
import PhoneboockForm from './Form/phoneboock-form';
import SearchInput from './Search-input/SearchInput';
import initialnumbers from '../data/initial-numbers.json';

const App = () => {
  const [numberList, setNumberlist] = useState(
    JSON.parse(localStorage.getItem('numberList')) ?? initialnumbers
  );
  const [filter, setFilter] = useState('');

  const lowerFilter = filter.toLowerCase();
  const filtredList = numberList.filter(num =>
    num.name.toLowerCase().includes(lowerFilter)
  );

  // useEffect(() => {
  //   const localNumberList = localStorage.getItem('numberList');
  //   localNumberList && setNumberlist(JSON.parse(localNumberList));
  // }, []);

  useEffect(() => {
    window.localStorage.setItem('numberList', JSON.stringify(numberList));
  }, [numberList]);

  const deleteItem = id => {
    setNumberlist(numberList.filter(num => num.id !== id));
  };

  const filterSet = data => {
    setFilter(data);
  };

  const dataSet = data => {
    const userId = nanoid();
    
    if (numberList.find(i => i.name === data.name || i.tel === data.tel)) {
      return alert(`this name or number is already used`);
    }
    return setNumberlist(prev => [
      { id: userId, name: data.name, tel: data.tel },
      ...prev,
    ]);
  };

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
        <PhoneboockForm onSubmit={dataSet} />
      </Box>
      {numberList.length > 0 && (
        <Box>
          <SearchInput onSearch={filterSet} />
          <ContactList numberList={filtredList} onDeleteItem={deleteItem} />
        </Box>
      )}
    </div>
  );
};

export default App;
