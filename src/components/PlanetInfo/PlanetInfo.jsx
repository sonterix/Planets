import React from 'react'
import PropTypes from 'prop-types'

import styles from './PlanetInfo.module.scss'

const PlanetInfo = ({ handleSearch, handleSort, desc }) => (
  <div className={styles.PlanetInfo}>
    <div className={styles.Actions}>
      <label>
        <span>Seatch</span>
        <input
          type="text"
          name="search"
          placeholder="by Name or Atmosphere"
          onChange={({ target: { value } }) => handleSearch(value)}
        />
      </label>
      <label>
        <span>Sort By</span>
        <select name="sort" defaultValue="default" onChange={({ target: { value } }) => handleSort(value)}>
          <option value="default" disabled={true}>
            Select Sort By
          </option>
          <option value="size">Size</option>
          <option value="distance">Distance from Sun</option>
          <option value="satellites">Number of Satellites</option>
        </select>
      </label>
    </div>
    <div className={styles.Description}>
      <h3>Planet Description</h3>
      <p>{desc.length ? desc : <span className={styles.NotSelected}>Select a planet</span>}</p>
    </div>
  </div>
)

PlanetInfo.propTypes = {
  handleSearch: PropTypes.func,
  handleSort: PropTypes.func,
  desc: PropTypes.string
}

PlanetInfo.defaultProps = {
  handleSearch: () => {},
  handleSort: () => {},
  desc: ''
}

export default PlanetInfo
