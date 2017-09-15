class Api::V1::VotersController < ApplicationController
  def index
    voters = Voter.all
    render json: voters
  end

  def get_voters_by_volunteer
    volunteer = Volunteer.find_by(id: params[:id])
    volunteer ? voters = volunteer.voters : nil
    render json: voters
  end
end
