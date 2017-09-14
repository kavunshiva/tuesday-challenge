import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class VolunteersList extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: undefined
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, { name }){
    this.setState({
      activeItem: name
    })
  }
  render(){
    return (
      <Menu fluid vertical tabular>
        <Menu.Item>
          <Menu.Header>Volunteers</Menu.Header>
          <Menu.Menu>
            {this.props.volunteers.map(volunteer => <Menu.Item key={volunteer.id} name={`volunteer_${volunteer.id}`} active={this.state.activeItem === `volunteer_${volunteer.id}`} onClick={this.handleClick}>{`${volunteer.first_name} ${volunteer.last_name}`}</Menu.Item>)}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
