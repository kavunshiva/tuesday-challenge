class Volunteer < ApplicationRecord
  has_and_belongs_to_many :voters
end
