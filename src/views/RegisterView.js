import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  useToast,
} from '@chakra-ui/react';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const toast = useToast();
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '' || email === '') {
      return toast({
        title: `Please, fill the empty fields`,
        status: 'warning',
      });
    }
    dispatch(register({ name, email, password }));
    toast({
      title: `you have successfully registered, please login`,
      status: 'success',
    });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Heading mb={6} color="#3db5c5">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <Input
            mb={6}
            placeholder="Enter login"
            _placeholder={{ opacity: 0.4, color: '#90CDF4' }}
            color="#3db5c5"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <Input
            mb={6}
            placeholder="Enter e-mail"
            _placeholder={{ opacity: 0.4, color: '#90CDF4' }}
            color="#3db5c5"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <InputGroup>
            <Input
              mb={6}
              pr="4rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              _placeholder={{ opacity: 0.4, color: '#90CDF4' }}
              color="#3db5c5"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button color="#3db5c5" h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </label>
        <Button color="#3db5c5" type="submit">Sign Up</Button>
      </form>
    </>
  );
};
export default RegisterView;
