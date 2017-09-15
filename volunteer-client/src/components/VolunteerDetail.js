import React from 'react'
import VotersContainer from '../containers/VotersContainer'

const VolunteerDetail = (props) => {
  const { volunteer } = props
  return (
    <div>
      {`Voter roster for volunteer: ${volunteer.first_name} ${volunteer.middle_initial}. ${volunteer.last_name}, DOB: ${volunteer.date_of_birth}, ${volunteer.political_interests}`}
      <VotersContainer volunteer={volunteer} />
    </div>
  )
}

export default VolunteerDetail
