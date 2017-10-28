import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createTeam($name: String!, $location: String!) {
    createTeam(name: $name, location: $location) {
      id
      name
      location
    }
  }
`

const AddTeam = (props) => {



  return (
    <div>
      <h1>Add Team</h1>
      <button onClick={e => props.mutate({
        variables: {
          name: 'Lakers',
          location: 'Los Angeles, CA'
        }
      })}>Add Lakers</button>
    </div>
  )

}

export default graphql(MUTATION)(AddTeam)

