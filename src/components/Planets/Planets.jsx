import React, { useState } from 'react'

import Planet from '../Planet/Planet'
import PlanetInfo from '../PlanetInfo/PlanetInfo'
import planetsData from '../../static/planets'
import stars from '../../assets/images/stars.jpg'
import styles from './Planets.module.scss'

const Planets = () => {
  const [planets, setPlanets] = useState(planetsData)
  const [selectedPlanet, setSelectedPlanet] = useState({})

  const initialPlanets = planetsData
  const { description = '' } = selectedPlanet

  const handleSearch = value =>
    setPlanets(
      initialPlanets.filter(
        ({ name, atmosphere }) =>
          name.toLowerCase().startsWith(value.toLowerCase()) ||
          atmosphere.some(atmsr => atmsr.toLowerCase().startsWith(value.toLowerCase()))
      )
    )

  const handleSort = value => {
    const planetsForSort = [...planets]

    switch (value) {
      case 'size':
        setPlanets(planetsForSort.sort((a, b) => b.radius - a.radius))
        break

      case 'distance':
        setPlanets(planetsForSort.sort((a, b) => b.distance_from_sun - a.distance_from_sun))
        break

      case 'satellites':
        setPlanets(planetsForSort.sort((a, b) => b.satellites - a.satellites))
        break

      default:
        break
    }
  }

  return (
    <div className={styles.Planets} style={{ backgroundImage: `url(${stars})` }}>
      <div className={styles.PlanetItems}>
        {planets.length ? (
          planets.map(planet => <Planet key={planet.id} planet={planet} handleSelectPlanet={setSelectedPlanet} />)
        ) : (
          <p className={styles.NotFound}>No Planets Found</p>
        )}
      </div>

      <PlanetInfo handleSearch={handleSearch} handleSort={handleSort} desc={description} />
    </div>
  )
}

export default Planets
