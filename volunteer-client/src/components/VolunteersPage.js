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
    this.selectVolunteer = this.selectVolunteer.bind(this)
  }

  selectVolunteer(e, { name }){
    const volunteer = this.props.volunteers.find(volunteer => volunteer.id === parseInt(name.split('_')[1]))
    this.setState({
      volunteer: volunteer
    })
  }

  render(){
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            {this.props.volunteers.length > 0 ? <VolunteersList volunteers={this.props.volunteers} volunteerId={this.state.volunteer.id} selectVolunteer={this.selectVolunteer} /> : null}
          </Grid.Column>
          <Grid.Column width={8}>
            {Object.keys(this.state.volunteer).length > 0 ? <VolunteerDetail volunteer={this.state.volunteer} /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
