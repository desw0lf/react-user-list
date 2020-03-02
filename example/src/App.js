import React, { Component } from 'react'
import { USERS } from "./SAMPLE_DATA/users";
import UserList, { UserAvatar } from 'react-user-list'

export default class App extends Component {
  render () {
    return (
      <div style={{width: "80%", margin: "72px auto"}}>
        <section className="section">
          <UserList users={USERS}>
          {({ index, user }) => {
            return <div onClick={() => alert("test")}><UserAvatar user={user}/><span>{user.firstName + " " + user.lastName}</span></div>
          }}
          </UserList>
        </section>
        <section className="section">
          <div><UserAvatar user={USERS[1]} size={80} borderWidth={5} borderColor="rgba(0,0,0,0.5)" borderRadius={6} /></div>
        </section>
      </div>
    )
  }
}
