class Event < ApplicationRecord
  belongs_to :creator,
  class_name: :User,
  primary_key: :id,
  foreign_key: :creator_id

  # has_many :registrations,
  # class_name: :Registration,
  # primary_key: :id,
  # foreign_key: :event_id
  has_many :registrations,
  class_name: :Registration,
  primary_key: :id,
  foreign_key: :event_id

  has_many :attendees,
  through: :registrations,
  source: :user
end
