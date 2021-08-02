import "./contactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContact = (id) => dispatch(deleteContact(id));
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
