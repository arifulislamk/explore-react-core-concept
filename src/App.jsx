import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actors from'./Actors'
import Singer from'./Singer'
import BookStore from './BookStore'

function App() {
  const books = [
    {name: 'Bangla', Price : 120},
    {name: 'English', Price : 150},
    {name: 'Math', Price : 150},
    {name: 'Physices', Price : 180},
  ]
  const actors = [ 'shakib', 'riyaz', 'rubel','Ariful Islam ', "khairul Islam"]
  const singers = [
    { name: 'junaid Evan', age: 25},
    { name: 'balam', age: 38},
    { name: 'Sumi', age: 29},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map( singer => <Singer singer={singer}></Singer>)
      }

      {
        actors.map( actors => <Actors name={actors}></Actors>)
      }
      {/* <Todo
        task="JSX Concepts"
        isDone={true}>
      </Todo>

      <Todo
        task="learn React"
        isDone={true}>
      </Todo>

      <Todo
        task="jsx"
        isDone={false}>
      </Todo> */}
      {/* <Devices name="laptop" price="20000"></Devices>
      <Devices name="Mobile" price="17"></Devices>
      <Devices name="Watch" price="3k"></Devices>
      <Student grade={1} Score="80"></Student>
      <Student grade="Scound" Score="60"></Student>
      <Student></Student>
      <Person></Person>
      <Developer></Developer> */}

    </>
  )
}
function Devices(props) {
  return <h2>Name:{props.name} Price:{props.price}</h2>
}

function Student({ grade = 1, Score = 0 }) {
  return <h3>Grade:{grade} Score:{Score}</h3>
}

function Person() {
  const age = 25;
  const num = 20;
  const name = 'ariful';
  return (
    <div className='student'>
      <h1> This a student</h1>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid blue',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h4>dev dev</h4>
      <p>coding</p>
    </div>
  )
}

export default App
