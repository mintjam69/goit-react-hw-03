import React, { useState } from "react";
import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ user, handleDeleteContact }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.contactName}>
          <FaUser className={s.icon} /> <span>{user.name}</span>
        </p>

        <div className={s.contactNumber}>
          <FaPhone className={s.icon} /> <span>{user.number}</span>
        </div>
      </div>

      <button
        className={s.delButton}
        type="button"
        onClick={() => handleDeleteContact(user.id)}
        aria-label={`Delete contact ${user.name}`}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
