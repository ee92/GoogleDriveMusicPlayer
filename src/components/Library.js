import React from 'react'
import styles from '../styles/Library.module.css'

const Library = ({items, play}) => (
  <div>
    {Object.keys(items).map((key) =>
      <div
        key={items[key].id}
        className={styles.libraryItem}
        onClick={() => play(items[key])}
      >
        {items[key].name}
      </div>
    )}
  </div>
)

export default Library
