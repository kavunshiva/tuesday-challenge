class Api::V1::VolunteersController < ApplicationController
  def index
    volunteers = Volunteer.all
    render json: volunteers
  end

  def show
    volunteer = Volunteer.find_by(id: params[:id])
    render json: volunteer
  end
end
