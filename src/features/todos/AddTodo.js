import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './todosSlice'
import classnames from 'classnames'
import styles from './AddTodo.module.scss';

const mapDispatchToProps = { addTodo }

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const onChange = e => setTodoText(e.target.value)

  return (
    <div className={styles.root}>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addTodo(todoText)
          setTodoText('')
        }}
      >
        <input 
        className={ 
          classnames(
            styles.input
          )
        }
        placeholder='Type something...'
        value={todoText} 
        onChange={onChange} 
        />
        <button type="submit" className={styles.btn}>Add Todo</button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(AddTodo)