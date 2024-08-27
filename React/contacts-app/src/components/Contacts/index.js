import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css"

const Contacts = () => {
  const [contacts, setContacts] = useState([
     {
        fullname: "Ali",
        phone_number: "12345"
     },
     {
        fullname: "Mehmet",
        phone_number: "24680"
     },
     {
        fullname: "Semih",
        phone_number: "13579"
     }
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
