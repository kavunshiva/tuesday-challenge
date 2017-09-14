# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Voter.create([
  {
    name: "Ace Ventura",
    age: 32,
    location: "Lansing",
    phone_number: "517-555-1234",
    date_last_contacted: Date.new(2017,9,2)
  },
  {
    name: "Bob Woodward",
    age: 74,
    location: "Detroit",
    phone_number: "313-555-1337",
    date_last_contacted: Date.new(2017,8,15)
  },
  {
    name: "Marshall Mathers",
    age: 44,
    location: "Rochester Hills",
    phone_number: "947-555-8888",
    date_last_contacted: Date.new(2017,4,20)
  },
  {
    name: "Sojourner Truth",
    age: 67,
    location: "Flint",
    phone_number: "810-555-9263",
    date_last_contacted: Date.new(2016,11,24)
  },
  {
    name: "Jacqueline Morris",
    age: 25,
    location: "Kalamazoo",
    phone_number: "269-555-9876",
    date_last_contacted: Date.new(2017,9,13)
  }
])
