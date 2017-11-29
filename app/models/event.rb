class Event < ApplicationRecord
  validates :title, presence: true
  def self.categories
    ['Social', 'Race', 'Other', 'Joyride']
  end 
  

  validates :category, 
    :inclusion => { in: self.categories}
  validates_uniqueness_of :title, :case_sensitive => false
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

  has_many :bookmarks,
  class_name: :Bookmark,
  primary_key: :id,
  foreign_key: :event_id

  #this is probably unnecessary.
  # has_many :potential_attendees,
  # through: :bookmarks,
  # source: :user

  has_many :attendees,
  through: :registrations,
  source: :user




end
