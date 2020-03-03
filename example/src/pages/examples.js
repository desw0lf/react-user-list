import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { USERS } from "../SAMPLE_DATA/users";;
import UserList, { UserAvatar } from 'react-user-list';

function Examples() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <main>
        <div style={{width: "80%", margin: "72px auto"}}>
        <section className="section">
          <UserList users={USERS}>
          {({ index, user }) => {
            return <div onClick={() => alert(user.username)}><UserAvatar user={user}/><span>{user.firstName + " " + user.lastName}</span></div>
          }}
          </UserList>
        </section>
        <section className="section">
          <div><UserAvatar user={USERS[1]} size={80} borderWidth={5} borderColor="rgba(0,0,0,0.5)" borderRadius={6} /></div>
        </section>
        </div>
      </main>
    </Layout>
  );
}

export default Examples;
