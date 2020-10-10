import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change_num_action } from "./store/actionCreators";
import { useQuery } from '@apollo/client';
import { LAUNCHES_QUERY } from './query'
import LaunchItem from './launchItem';

export default memo(function ReduxLaunches() {
  // redux
  const { num } = useSelector(state => ({
    num: state.number.num
  }))
  const dispatch = useDispatch()

  // redux-apollo
  const { loading, data, error } = useQuery(
    LAUNCHES_QUERY
  );

  if (loading) return <h2>loading...</h2>
  if (error) console.log(error)

  return (
    <div>
      <button onClick={e => dispatch(change_num_action(num + 1))}>+1</button>
      {data.launches.map((item, index) => {
        return <LaunchItem info={item} key={index} />
      })}
    </div>
  )
})
