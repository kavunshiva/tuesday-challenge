import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import VolunteersList from './VolunteersList'
import VolunteerDetail from './VolunteerDetail'

export default class VolunteersPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      volunteer: {}
    }
  }
  render(){
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            {this.props.volunteers.length > 0 ? <VolunteersList volunteers={this.props.volunteers} /> : null}
          </Grid.Column>
          <Grid.Column width={8}>
            {Object.keys(this.state.volunteer).length > 0 ? <VolunteerDetail volunteer={this.state.volunteer} /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
