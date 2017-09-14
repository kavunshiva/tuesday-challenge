class Api::V1::VotersController < ApplicationController
  def index
    voters = Voter.all
    render json: voters
  end
end
