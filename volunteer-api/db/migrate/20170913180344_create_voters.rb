class CreateVoters < ActiveRecord::Migration[5.1]
  def change
    create_table :voters do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.string :phone_number
      t.date :date_last_contacted

      t.timestamps
    end
  end
end
