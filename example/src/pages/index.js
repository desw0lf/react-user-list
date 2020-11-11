import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import UserList, { UserAvatar } from "react-user-list";
import { USERS } from "../SAMPLE_DATA/users";
import { TwitterPicker } from "react-color";


const SAMPLE_USER = {
  firstName: "John",
  lastName: "Smith",
  username: "john.smith@sample.com",
  image: null
};

const DEFAULT_SWATCHES = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#EB144C', '#F78DA7', '#9900EF', '#FFFFFF', '#000000',];

const features = [
  {
    title: "No image avatar?",
    imageUrl: "img/feature_no_image_avatar.svg",
    description: (
      <>
        Automatic coloured avatar generated using user's initials and username/email to generate a randomized background colour.
      </>
    ),
    special1: true
  },
  {
    title: "Fully customizable",
    imageUrl: "img/feature_fully_customizable_v2.svg",
    description: (
      <>
        Fully customizable avatars, ability to change size, border radius, border width, border colour or set a theme and add your own CSS. 
      </>
    ),
    special2: true
  },
  {
    title: "Own dropdown elements",
    imageUrl: "img/feature_own_dropdown_elements.svg",
    description: (
      <>
        Built in dropdown element for concatenated user avatar list, with the ability to include customizable dropdown elements.
      </>
    ),
    special3: true
  }
];

function Feature({ imageUrl, title, description, special1, special2, special3 }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)} style={{position:"relative"}}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} style={{width: "auto"}} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Special1 isSpecial={special1}/>
      <Special2 isSpecial={special2}/>
      <Special3 isSpecial={special3}/>
    </div>
  );
}

function Picker({ color, isDisabled, handleChange, name}) {
  const [visible, setVisible] = useState(false);
  return <>
    <input style={{width: "60%", background: isDisabled ? "transparent" : color, cursor: isDisabled ? "default" : "pointer"}} readOnly={true} onClick={() => !isDisabled && setVisible(true)} maxLength="25" className="doco-input with-border" type="text" name={name} onChange={handleChange}/>
    {visible && !isDisabled && <div className="color-picker-cover-popover">
      <div className="color-picker-cover" onClick={() => setVisible(false)}/>
      <TwitterPicker triangle="hide" colors={DEFAULT_SWATCHES} color={color} onChangeComplete={(color) => handleChange({target: {name: name, value: color.hex, type: "text"}})}/>
    </div>}
  </>
}

function Property({name, value, handlePropertiesChange}) {
  return <div className="property" style={{width: "40%"}}><input id={`property_${name}`} className="styled-checkbox" type="checkbox" name={name} onChange={handlePropertiesChange} checked={value}/><label htmlFor={`property_${name}`}>Auto</label></div>;
}


function Special1({isSpecial}) {
  if (!isSpecial) {
    return null;
  }
  const [user, setUser] = useState(SAMPLE_USER);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return <div>
    {/* <p>Try it out!</p> */}
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


function Special2({isSpecial}) {
  if (!isSpecial) {
    return null;
  }
  const user = {
    firstName: "C",
    lastName: "J",
    username: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    image: null
  };
  const [settings, setSettings] = useState({
    size: 37,
    borderWidth: 3,
    borderColor: "#9900EF",
    borderRadius: 4,
    backgroundOpacity: 0.3,
    colourizeProperties: ["backgroundColor"],
    backgroundColor: "#ffffff",
    color: "black"
  });
  const [colourizeProperties, setColourizeProperties] = useState({
    color: true,
    "borderColor": true,
    "backgroundColor": true
  });
  useEffect(() => {
    setSettings((prevState) => ({
      ...prevState,
      colourizeProperties: Object.entries(colourizeProperties).filter(([key, value]) => value === true).map(([key, value]) => key)
    }))
  }, [colourizeProperties]);
  const handleChange = (event) => {
    const { name, type, value } = event.target;
    if (value === "") {
      return;
    }
    let parsedValue = type === "number" ? parseFloat(value) : value;
    if (name === "borderRadius") {
      parsedValue = value !== "rounded" ? parseFloat(value) : value;
    }
    setSettings((prevState) => ({
      ...prevState,
      [name]: parsedValue
    }))
  }
  const handlePropertiesChange = (event) => {
    const { name } = event.target;
    setColourizeProperties((prevState) => {
      return {
        ...prevState,
        [name]: !prevState[name]
      }
    })
  }
  return <div>
    {/* <p>Try it out!</p> */}
    <div className="tryme">
      <div style={{padding:0}}>
      <div style={{ 
                    position: "absolute",
                    zIndex: 1,
                    top: "49px",
                    left:"50%",
                    transform: "translate(-50%, -50%)"
                  }}><UserAvatar user={user} {...settings}/></div>
      </div>
      <div>
        <div className="special2">
          {/* <div>
            <span>Auto Colour CSS</span>
            <span>{Object.entries(colourizeProperties).map(([key, value]) => <div key={key}><Property name={key} value={value} handlePropertiesChange={handlePropertiesChange}/></div>)}</span>
          </div> */}
          <div><span>Size</span><span><input className="doco-input" type="number" min="0" max="500" placeholder="Size" name="size" value={settings.size} onChange={handleChange}/></span></div>
          <div className={colourizeProperties.borderColor ? "disabled-row" : ""}>
            <span>Border colour</span>
            <span>
              <Property name="borderColor" value={colourizeProperties.borderColor} handlePropertiesChange={handlePropertiesChange}/>
              <Picker isDisabled={colourizeProperties.borderColor} name="borderColor" color={settings.borderColor} handleChange={handleChange}/>
            </span>
          </div>
          <div><span>Border width</span><span><input className="doco-input" type="number" min="0" max="500" placeholder="Border width" name="borderWidth" value={settings.borderWidth} onChange={handleChange}/></span></div>
          <div><span>Border radius</span><span><input className="doco-input" type="number" min="0" max="500"  placeholder="Border radius" name="borderRadius" value={settings.borderRadius} onChange={handleChange}/></span></div>
          <div className={colourizeProperties.backgroundColor ? "disabled-row" : ""}>
            <span>Background colour</span>
            <span>
              <Property name="backgroundColor" value={colourizeProperties.backgroundColor} handlePropertiesChange={handlePropertiesChange}/>
              <Picker isDisabled={colourizeProperties.backgroundColor} name="backgroundColor" color={settings.backgroundColor} handleChange={handleChange}/>
            </span>
          </div>
          <div className={!colourizeProperties.backgroundColor ? "disabled-row-special" : ""}>
            <span>Background opacity</span><span><input className="doco-input" type="number" min="0.1" max="1" step="0.1"  placeholder="Background opacity" name="backgroundOpacity" value={settings.backgroundOpacity} onChange={handleChange}/></span>
          </div>
          <div className={colourizeProperties.color ? "disabled-row" : ""}>
            <span>Text colour</span>
            <span>
              <Property name="color" value={colourizeProperties.color} handlePropertiesChange={handlePropertiesChange}/>
              <Picker isDisabled={colourizeProperties.color} name="color" color={settings.color} handleChange={handleChange}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Special3({isSpecial}) {
  if (!isSpecial) {
    return null;
  }
  return (
    <Link to={useBaseUrl("docs/creating-the-dropdown")}>
      Find out how to add dropdown menu
    </Link>
  );
}




function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={classnames("hero hero--primary-dark", styles.heroBanner)}>
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
          <UserList maxHeight={260} minWidth={300} size={80} users={USERS} isExpanded={false}>
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
