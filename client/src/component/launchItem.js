import React, { memo } from 'react'

export default memo(function LaunchItem(props) {
  const { info } = props
  return (
    <div>
      <p>flight_number: {info.flight_number}</p>
      <p>mission_name: {info.mission_name}</p>
      <p>launch_data_local: {info.Launch_data_local}</p>
    </div>
  )
})
