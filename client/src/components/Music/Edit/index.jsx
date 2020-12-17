import React, { useEffect, useState, useContext } from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { NotificationContext } from '../../shared/Notifications';

const Edit = () => {
  const { id } = useParams();
  const [preload, setPreload] = useState({});
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(``)
    .then(({ data }) => {
      setPreload(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the quote: ${error.message}`
      });
    });
  }, [id, setNotification]);

  return (
    <>
      <Header title="Music">
        Hi I'm an editing man-child.
      </Header>

      <Container>
        <Form endpoint="music/update" preload={preload}/>
      </Container>
    </>
  );
}
 
export default Edit;