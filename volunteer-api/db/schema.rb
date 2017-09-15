# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170915043816) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "volunteers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "middle_initial"
    t.date "date_of_birth"
    t.string "political_interests"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "volunteers_voters", id: false, force: :cascade do |t|
    t.bigint "volunteer_id"
    t.bigint "voter_id"
    t.index ["volunteer_id"], name: "index_volunteers_voters_on_volunteer_id"
    t.index ["voter_id"], name: "index_volunteers_voters_on_voter_id"
  end

  create_table "voters", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "location"
    t.string "phone_number"
    t.date "date_last_contacted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
