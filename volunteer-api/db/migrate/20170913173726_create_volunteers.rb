class CreateVolunteers < ActiveRecord::Migration[5.1]
  def change
    create_table :volunteers do |t|
      t.string :first_name
      t.string :last_name
      t.string :middle_initial
      t.date :date_of_birth
      t.string :political_interests

      t.timestamps
    end
  end
end
