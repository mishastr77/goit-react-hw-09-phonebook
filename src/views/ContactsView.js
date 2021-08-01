import React, { useEffect } from "react";
import Container from "../Components/Container";
import Form from "../Components/Form";
import ContactsList from "../Components/ContactsList";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { fetchContact } from "../redux/contacts/contacts-operations";
import OnLoader from "../Components/OnLoader";
import { getLoading } from "../redux/contacts/contacts-selectors";

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container>
      <Form />
      <h2>Contacts</h2>
      {isLoadingContacts ? (
        <OnLoader />
      ) : (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Container>
  );
}
