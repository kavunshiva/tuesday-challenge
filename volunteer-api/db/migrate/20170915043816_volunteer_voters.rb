class VolunteerVoters < ActiveRecord::Migration[5.1]
  def change
    create_table :volunteers_voters, id: false do |t|
      t.belongs_to :volunteer, index: true
      t.belongs_to :voter, index: true
    end
  end
end
