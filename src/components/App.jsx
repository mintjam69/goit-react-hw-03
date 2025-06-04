import React, { useState, useEffect } from "react";
import ContactList from "./ContactList/ContactList.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  // Ініціалізуємо стан контактів з даних у локальному сховищі або жорстко закодованих контактів
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
          { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
          { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
          { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filter, setFilter] = useState("");

  // Збереження контактів у локальне сховище при зміні стану `contacts`
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Додавання нового контакту з перевіркою на дублікати
  const handleAddContact = (newContact) => {
    const duplicateContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (duplicateContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  // Видалення контакту за його `id`
  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // Фільтрація контактів за введеним фільтром
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox setSearchUser={setFilter} />
      <ContactList
        userContact={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
