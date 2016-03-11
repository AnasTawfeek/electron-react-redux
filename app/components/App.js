import React from 'react'

// simple React Component
import HelloWorld from '../hello_world/hello_world'

// our react-redux todo app
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <HelloWorld />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App