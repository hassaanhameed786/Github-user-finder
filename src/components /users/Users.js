import React from 'react'
import Useritems from './Useritems';
import Spinner from '../layout /Spinner';
import PropTypes from 'prop-types'



 const Users=({users, loading}) => {



  Users.protypes ={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
  }
  
          const userStyle ={
              display:'grid',
              gridTemplateColumns:'repeat(3,1fr)',
          
              gripGap:'1rem'
          }
          


  if (loading) 
  {
    return <Spinner/>  
  }

  else

  {
    return (
      <div style={userStyle}>

      
      {users.map(user=>(

          <Useritems key={user.id}
          user={user}>
          </Useritems>

      ))}
      </div>
  )

  }


//this all  data came from git api later on 
  
// In render function i use loop using Js func map

        

        

}



export default Users
