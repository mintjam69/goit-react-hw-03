import React, { useState } from "react";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ userContact, handleDeleteContact }) => {
  const createContact = userContact.map((user) => (
    <Contact
      user={user}
      handleDeleteContact={handleDeleteContact}
      key={user.id}
    />
  ));
  return (
    <div>
      <ul className={s.contactList}>{createContact}</ul>
    </div>
  );
};
export default ContactList;
