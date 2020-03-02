import React, { Component } from 'react'
import { USERS } from "./SAMPLE_DATA/users";
import UserList, { UserItem } from 'react-user-list'

export default class App extends Component {
  render () {
    return (
      <div style={{width: "80%", margin: "72px auto"}}>
        <UserList users={USERS}>
          {USERS.map((user) => <div><UserItem user={user}/><span style={{whiteSpace: "nowrap"}}>{user.firstName + " " + user.lastName}</span></div>)}
        </UserList>
        <div><UserItem user={USERS[1]} size={40} borderWidth={5} borderColor="rgba(0,0,0,0.5)" borderRadius={6} /></div>
      </div>
    )
  }
}
