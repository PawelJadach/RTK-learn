import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from './filtersSlice'
import styles from './Footer.module.scss';

const Footer = () => (
  <div>
    <span className={styles.title}>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer