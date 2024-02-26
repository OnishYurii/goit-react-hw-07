import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { LineWave } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Phonebook</h1>
      {loading && !error && (
        <div className="loader-container">
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="blue"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      )}
      {error && <p>{error}</p>}
      <ContactForm />
      <SearchBox />
      {items.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
