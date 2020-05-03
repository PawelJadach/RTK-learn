import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todo.module.scss';
import classnames from 'classnames';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={
      classnames(
        completed ? styles.completed : null,
        styles.todo
      )
    }
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
