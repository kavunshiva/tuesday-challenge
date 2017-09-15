import React, { Component } from 'react'
import { VolunteersAdapter } from '../adapters'
import VolunteersPage from '../components/VolunteersPage'

export default class VolunteersContainer extends Component {
  constructor(){
    super()
    this.state = {
      volunteers: []
    }
  }

  componentDidMount(){
    VolunteersAdapter.volunteers()
      .then(volunteers => this.setState({
        volunteers: volunteers
      }))
  }

  render(){
    return (
      <VolunteersPage volunteers={this.state.volunteers} />
    )
  }
}
