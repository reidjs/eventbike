class Event < ApplicationRecord
  belongs_to :creator,
  class_name: :User,
  primary_key: :id,
  foreign_key: :creator_id
end
