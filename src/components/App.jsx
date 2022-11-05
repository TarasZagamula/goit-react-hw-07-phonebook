import { useSelector } from "react-redux";
import { ContactList } from './Contact-list/ContactList';
import { Box } from '../components/Box/box.styled';
import PhoneboockForm from './Form/phoneboock-form';
import SearchInput from './Search-input/SearchInput';

const App = () => {

  const contactList = useSelector(state => state.numberList.numberList);

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
        <PhoneboockForm />
      </Box>
      {contactList.length > 0 && (
        <Box>
          <SearchInput />
          <ContactList />
        </Box>
      )}
    </div>
  );
};

export default App;
