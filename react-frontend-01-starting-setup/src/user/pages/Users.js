import React from 'react'
import UsersList from '../components/UsersList';
import {v4} from 'uuid';

const USERS = [{
  id: v4(),
  image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  name: "Jason",
  places: 3,
}]

const Users = () => {
  return (
    <UsersList items={USERS}/>
  )
}

export default Users