import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

  const handleChange = (event) => {
      const searchName = event.target.value
      props.filterChange(searchName)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {filterChange}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter