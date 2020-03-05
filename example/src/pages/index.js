import React, { useState } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import UserList, { UserAvatar } from "react-user-list";
import { USERS } from "../SAMPLE_DATA/users";

const features = [
  {
    title: "No image avatar?",
    imageUrl: "img/feature_no_image_avatar.svg",
    description: (
      <>
        Automatic coloured avatar generated using user's initials and username/email to generate a randomized background colour.
      </>
    ),
    special: true
  },
  {
    title: "Fully customizable",
    imageUrl: "img/feature_fully_costomizable.svg",
    description: (
      <>
        Fully customizable avatars, ability to change size, border radius, border width, border colour or set a theme and add your own CSS. 
      </>
    )
  },
  {
    title: "Own dropdown elements",
    imageUrl: "img/feature_own_dropdown_elements.svg",
    description: (
      <>
        Built in dropdown element for concatenated user avatar list, with the ability to include customizable dropdown elements.
      </>
    )
  }
];

function Feature({ imageUrl, title, description, special }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} style={{width: "auto"}} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Special isSpecial={special}/>
    </div>
  );
}

function Special({isSpecial}) {
  if (!isSpecial) {
    return null;
  }
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Smith",
    username: "john.smith@sample.com",
    image: null
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return <div>
    <p>Try it out!</p>
    <div className="tryme">
      <div>
        <UserAvatar size={80} user={user}/>
      </div>
      <div>
        <div><input className="doco-input" type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange}/></div>
        <div><input className="doco-input" type="text" placeholder="First name" name="firstName" value={user.firstName} onChange={handleChange}/></div>
        <div><input className="doco-input" type="text" placeholder="Last name" name="lastName" value={user.lastName} onChange={handleChange}/></div>
      </div>
    </div>
  </div>
}



function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={classnames("hero hero--primary-dark", styles.heroBanner)} style={{overflow: "initial"}}>
        <div className="container" style={{width:"60%"}}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames("button button--outline button--secondary button--lg", styles.getStarted)}
              to={useBaseUrl("docs/installation")}>
              Get Started
            </Link>
          </div>
        </div>
        <div className="container" style={{width:"40%",textAlign:"left"}}>
          <UserList maxHeight={260} minWidth={300} size={80} users={USERS} isExpanded={true}>
            {({ index, user }) => {
              return <div style={{background: selectedUser === user && "rgba(103, 66, 118, 0.3)"}} onClick={() => setSelectedUser(user)}><UserAvatar size={50} user={user}/><span>{user.firstName + " " + user.lastName}</span></div>
            }}
          </UserList>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
