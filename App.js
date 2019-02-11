import React, { Component } from 'react';
import './App.css';

const App = () => <PersonList/>


const PersonList =() => {
const people = [
  {
    img: 80,
    name:'raks',
     job:'developer'
  },
  {
    img: 81,
    name:'hraks',
    job:'designer'
  },
  {
    img:82,
    name:'iraks',
     job:'artist'
  }
];

  return ( <section>
    <Person person={people[0]} />
     <Person person={people[1]} />
     
     <Person person={people[2]} />
     </section>
     );
  
};


const Person = (props) => {
  const{img,name,job,} = props.person;
  const {children} = props;
 
    const url = 
  "https://randomuser.me/api/portraits/thumb/men/81.jpg";
  return <div className="person">
  <img src={url} alt=""/>

  <div>
    <h4>{name}</h4>
    <h4>{job}</h4>
  </div>
  </div>
 

};

export default App;
