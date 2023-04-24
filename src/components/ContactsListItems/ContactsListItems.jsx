import propTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import { Button, Text, Flex, Spacer } from '@chakra-ui/react';
import Morti from 'images/Morti.png';

const ContactsListItems = ({ id, name, number }) => {
    const dispatch = useDispatch()

    const handleDeleteContact = () => dispatch(deleteContact(id))

    return (
        <Flex as='li' alignItems='center' justifyContent='space-between' mb={6}>
        <img src={Morti} width="50" height="50" alt="Morti" />
        <Text as='b' color='#3db5c5' ml={4}>{name}</Text>
        <Text as='b' color='#3db5c5' ml={4}>{number}</Text>
        <Spacer />
        <Button onClick={handleDeleteContact} type='button' color="#3db5c5">delete</Button>
    </Flex>
    );
}
;

export default ContactsListItems

ContactsListItems.propTypes = {
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  };