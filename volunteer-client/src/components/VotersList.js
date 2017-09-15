import React from 'react'
import { Grid } from 'semantic-ui-react'

const VotersList = (props) => {
  const { voters } = props
  return (
    <Grid columns={5}>
      <Grid.Row>
        <Grid.Column>Name</Grid.Column>
        <Grid.Column>Age</Grid.Column>
        <Grid.Column>Location</Grid.Column>
        <Grid.Column>Phone Number</Grid.Column>
        <Grid.Column>Date Last Contacted</Grid.Column>
      </Grid.Row>
      {voters ? voters.map(voter => (
        <Grid.Row key={voter.id}>
          <Grid.Column>{voter.name}</Grid.Column>
          <Grid.Column>{voter.age}</Grid.Column>
          <Grid.Column>{voter.location}</Grid.Column>
          <Grid.Column>{voter.phone_number}</Grid.Column>
          <Grid.Column>{voter.date_last_contacted}</Grid.Column>
        </Grid.Row>
      )) : null
      }
    </Grid>
  )
}

export default VotersList
