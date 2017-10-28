import React, { Component } from 'react'
import './App.css'

import { graphql } from 'react-apollo'

import gql from 'graphql-tag'

import AddTeam from './AddTeam'

class App extends Component {
  render() {

    console.log(this.props.data)
    const { loading, allTeams } = this.props.data

    return (
      <div>
        <h1>Teams</h1>
        {!loading && allTeams.map(team => (
          <div key={team.id}>
            {team.name}
          </div>
        ))}

        <AddTeam />
      </div>
    )
  }
}

const MUTATION = gql`
  mutation createTeam($name: String!, $location: String!) {
    createTeam(name: $name, location: $location) {
      id
      name
      location
    }
  }
`

const QUERY = gql`
  query {
    allTeams {
      id
      name
      location
    }

    allUsers {
      id
    }
  }
`

// const combo = compose(MUTATION, QUERY)

// const QUERY_WITH_MUTATION = compose(graphql(MUTATION), graphql(QUERY))

export default graphql(QUERY)(App)
