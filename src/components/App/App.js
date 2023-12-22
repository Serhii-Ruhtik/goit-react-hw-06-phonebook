import { ToastContainer } from 'react-toastify';
import ContactList from '../ContactList/ContactList';
import AddContact from '../AddContact/AddContact';
import Filter from '../Filter/Filter';

import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <p className={css.sectionHeading}>Phonebook</p>
      <AddContact />
      <p className={css.sectionHeading}>Contacts</p>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};
export default App;
