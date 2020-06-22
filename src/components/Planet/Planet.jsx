import React from 'react'
import PropTypes from 'prop-types'

import planets from '../../assets/images/planets-sprite.png'
import styles from './Planet.module.scss'

const Planet = ({
  planet,
  planet: { name, mass, mass_unit, radius, radius_unit, satellites, distance_from_sun, distance_from_sun_unit },
  handleSelectPlanet
}) => (
  <div
    className={`${styles.Planet} ${styles[name]}`}
    style={{ backgroundImage: `url(${planets})` }}
    onClick={() => handleSelectPlanet(planet)}
  >
    <ul className={styles.Data}>
      <li>
        <span>Name</span>
        <span>{name}</span>
      </li>
      <li>
        <span>Satellites</span>
        <span>{satellites}</span>
      </li>
      <li>
        <span>Mass</span>
        <span>
          {mass} {mass_unit}
        </span>
      </li>
      <li>
        <span>Radius</span>
        <span>
          {radius} {radius_unit}
        </span>
      </li>
      <li>
        <span>From Sun</span>
        <span>
          {distance_from_sun} {distance_from_sun_unit}
        </span>
      </li>
      <li>
        <p>Click for read more</p>
      </li>
    </ul>
  </div>
)

Planet.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    mass: PropTypes.number,
    mass_unit: PropTypes.string,
    radius: PropTypes.number,
    radius_unit: PropTypes.string,
    satellites: PropTypes.number,
    distance_from_sun: PropTypes.number,
    distance_from_sun_unit: PropTypes.string,
    description: PropTypes.string
  }),
  handleSelectPlanet: PropTypes.func
}

Planet.defaultProps = {
  planet: {
    name: '',
    mass: 0,
    mass_unit: '',
    radius: 0,
    radius_unit: '',
    satellites: 0,
    distance_from_sun: 0,
    distance_from_sun_unit: '',
    description: ''
  },
  handleSelectPlanet: () => {}
}

export default Planet
