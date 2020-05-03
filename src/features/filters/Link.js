import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.module.scss';
import classnames from 'classnames';

const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <button
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    className={
      classnames(
        styles.btn,
        active ? styles.active : null
      )
    }
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link