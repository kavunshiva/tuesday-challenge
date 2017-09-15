import React, { Component } from 'react'
import { VotersAdapter } from '../adapters'
import VotersList from '../components/VotersList'

export default class VotersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      voters: []
    }
  }

  componentDidMount(){
    VotersAdapter.getVotersByVolunteer(this.props.volunteer)
      .then(voters => this.setState({
        voters: voters
      }))
  }

  render(){
    return (
      <VotersList voters={this.state.voters} />
    )
  }
}
