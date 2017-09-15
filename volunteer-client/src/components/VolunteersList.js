import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const VolunteersList = (props) => {
  return (
    <div>
      <Menu fluid vertical tabular>
        <Menu.Item>
          <Menu.Header>Volunteers</Menu.Header>
          <Menu.Menu>
            {props.volunteers.map(volunteer => <Menu.Item key={volunteer.id} name={`volunteer_${volunteer.id}`} active={props.volunteerId === volunteer.id} onClick={props.selectVolunteer}>{`${volunteer.first_name} ${volunteer.last_name}`}</Menu.Item>)}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default VolunteersList
