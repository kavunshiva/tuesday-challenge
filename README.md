# The Assignment

## Prompt
Hi! I’m Karen and I’m running for office in the great state of Michigan. I’d really like your help: I need a way to have people sign up to volunteer on my campaign.

In particular, I need volunteers to give me their first name, last name, middle initial, and date of birth. I also need to know what their political interests are.

Next, I need to match these people with the voter data that I have about voters in my district. The format of the voter data will be name, age, location, phone number, and date last contacted.

Can you help me set this up?

## The strategy
While I could make a simple command-line interface, that's no fun--actually, it's perhaps a little less usable for the average Joe, and nerds might dig it, but that's beside the point. The point, here, is usability.

The idea, here, is to set up a Ruby on Rails API on the back end with nice, tidy endpoints for a ReactJS front end to hit.

### Back end
First things first: let's set up our models. From the prompt, it would appear that we'll at the bare minimum need `Volunteer` and `Voter` models. They're going to be related to one another; to make this relationship as flexible (and representative of the real world) as possible, I'm going to say it's many-to-many relationship, i.e. any given **volunteer** _has many_ **voters** for whom they're responsible and any given **voter** _has many_ **volunteers** who will ~~hassle~~ help them make the right decision come election day. We'll seed our data with several instances of the `Voter` model.

### Front end
We'll assume the users of this application are volunteers, as the prompt assumes that we already have voter data. Because we're trusting folks (and weren't asked by Karen to authenticate users), we'll give these volunteers the option of selecting themselves from a list of volunteers already in the database or creating a new identity (in which case, welcome, volunteer! You're doing the good work of an engaged citizen).

When a volunteer is selected or created, they will be brought to a screen listing out the voters for which they're responsible that will also allow them to add more voters from a dropdown menu or remove them from their roster of responsibility.


## Some nice next steps
Lists are nice, but checkboxes are even better. It would be good to be able to keep track of whether or not (or how many times) a voter has been reached out to by a volunteer (or more than one volunteer...or one persistent volunteer more than once); it'd also be good to know whether or not that volunteer actually got through. (I know from personal experience that doorknocking more often than not results in a "didn't answer" result, and I'd imagine the same holds true for any given virtual interaction.)

## Implementation

### Building the back end
First things first, we'll create a new API-only Rails deploy with a Postgres database:

`rails new volunteer-api --api --database=postgresql`

Then we'll `cd` into our new directory and generate our `Volunteer` and `Voter` models:

`rails generate model Volunteer first_name last_name middle_initial date_of_birth:date political_interests`

`rails generate model Voter name age:integer location phone_number date_last_contacted:date`

Then we'll go into our models and write the `#has_and_belongs_to_many` ActiveRecord relations into them.

Then we'll make some (example) instances of voters in our `db/seeds.rb` file and then create and seed our database:

`rake db:create && rake db:migrate && rake db:seed`

We'll need to do various other things, like setup CORS so our front end can hit our API, etc., but this is a good start.
