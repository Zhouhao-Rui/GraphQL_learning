// import React, { memo } from 'react'
// import { Query } from "react-apollo";
// import LaunchItem from "./launchItem";
// import {LAUNCHES_QUERY} from './query'

// export default memo(function Launches() {
//   return (
//     <React.Fragment>
//       <h1>Launches</h1>
//       <Query query={LAUNCHES_QUERY}>
//         {
//           ({ loading, error, data }) => {
//             if (loading) {
//               return <h2>loading...</h2>
//             }
//             if (error) {
//               console.log(error)
//             }
//             return <>
//               {data.launches.map((item, index) => {
//                 return <LaunchItem info={item} key={item.flight_number} />
//               })}
//             </>
//           }
//         }
//       </Query>
//     </React.Fragment>
//   )
// })
