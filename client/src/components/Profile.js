import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Wrapper = styled.div`
  max-width: 500px;
  max-height: 500px;
  margin: 50px;
  margin-bottom: 50px;
  padding: 25px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div``;

const Heading = styled.h2``;

const Image = styled.div``;

const Container = styled.div``;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

const Btn = styled.div`
  display: flex;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: space-between;
`;

// const Labels = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Button = styled.button`
  color: white;
  width: 150px;
  background-color: green;
`;

const Profile = ({ user }) => {
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://httpbin.org/post', {
        firstName,
        lastName,
        city,
        email,
        postcode,
        phone,
        country,
        state,
        gender,
      });

      setFirstName(user[0].name.first);
      setLastName(user[0].name.last);
      setCity(user[0].location.city);
      setPostCode(user[0].location.postcode);
      setPhone(user[0].cell);
      setState(user[0].location.state);
      setCountry(user[0].location.country);
      setEmail(user[0].email);
      setGender(user[0].gender);

      console.log('New user ==>', data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user.map((u, i) => (
        <Wrapper key={i}>
          <Header>
            <Icon>
              <ArrowBackIcon />
            </Icon>
            <Heading>Profile</Heading>
            <img
              src={u.picture.medium}
              alt='profile'
              style={{ borderRadius: '50%', width: '50px', height: '50px' }}
            />
          </Header>
          <hr />
          <Container>
            <p>
              <strong>Edit</strong>
            </p>
            <SubHeader>
              <p>Picture</p>
              <img
                src={u.picture.medium}
                alt=''
                style={{ borderRadius: '50%' }}
              />
            </SubHeader>
            <Form onSubmit={handleSubmit}>
              <InputForm>
                <p>First Name</p>
                <TextField
                  type='text'
                  value={u.name.first}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <p>Last Name</p>
                <TextField
                  type='text'
                  value={u.name.last}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <p>City</p>
                <TextField
                  type='text'
                  value={u.location.city}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <p>State</p>
                <TextField
                  type='text'
                  value={u.location.state}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <p>Email</p>
                <TextField
                  type='text'
                  value={u.email}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <p>Country</p>
                <TextField
                  type='text'
                  value={u.location.country}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <p>Postcode</p>
                <TextField
                  type='text'
                  value={u.location.postcode}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <p>Phone</p>
                <TextField
                  type='text'
                  value={u.cell}
                  disabled
                  variant='standard'
                />
                <br />
              </InputForm>
              <InputForm>
                <h3>Do you want to make your gender public?</h3>
                <Switch {...label} defaultChecked />
              </InputForm>
              <Btn>
                <Button variant='contained'>Submit</Button>
              </Btn>
            </Form>
          </Container>
        </Wrapper>
      ))}
    </div>
  );
};

export default Profile;
