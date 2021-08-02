import React, { useState, useCallback } from "react";
import Section from "../Section";
import shortid from "shortid";
import styles from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import Fab from "@material-ui/core/Fab";

export default function Form() {
  const initialState = {
    name: "",
    number: "",
  };
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (name, number) => {
      dispatch(addContact(name, number));
    },
    [dispatch]
  );
  const contacts = useSelector((state) => state.contacts.items);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addNoRepeatContact = (state, contacts) => {
    const { name, number } = state;
    if (
      contacts.some(
        (contacts) => contacts.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    onSubmit(state);
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNoRepeatContact(state, contacts);
  };

  const reset = () => {
    setState((prev) => ({
      ...prev,
      name: "",
      number: "",
    }));
  };

  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();
  const { name, number } = state;

  return (
    <Section title="Phonebook">
      <form onSubmit={handleSubmit}>
        <label htmlFor={inputNameId}>
          Name
          <input
            className={styles.inputForm}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            id={inputNameId}
          />
        </label>
        <label htmlFor={inputNumberId}>
          Number
          <input
            className={styles.inputForm}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            id={inputNumberId}
          />
        </label>
        <Fab
          color="primary"
          aria-label="add"
          type="submit"
          className={styles.buttonForm}
        >
          Add contact
        </Fab>
      </form>
    </Section>
  );
}
