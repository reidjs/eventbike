class Event < ApplicationRecord
  validates :title, :date, :location, presence: true
  def self.categories
    ['Social', 'Race', 'Other', 'Joyride', 'Motorcycle', 'Scooter', 'Bicycle', 'Workout']
  end 

  def self.category_images
    ['https://res.cloudinary.com/eventbike/image/upload/c_scale,w_373/v1512013012/andhika-soreng-377802_byyy6w.jpg',
    'https://res.cloudinary.com/eventbike/image/upload/c_scale,w_486/v1511497434/2photo-pots-438912_skmyqh.jpg',
    'https://res.cloudinary.com/eventbike/image/upload/c_scale,w_163/v1511497467/paolo-candelo-327607_ebajjm.jpg',
    'https://res.cloudinary.com/eventbike/image/upload/c_scale,w_177/v1511497471/ryo-yoshitake-360687_ltsckg.jpg',
    'https://res.cloudinary.com/eventbike/image/upload/c_scale,w_365/v1511497446/dennis-savenko-202218_bia7rx.jpg',
    'https://res.cloudinary.com/eventbike/image/upload/c_scale,w_206/v1511497476/vishal-banik-440226_mvg23f.jpg',
    'https://res.cloudinary.com/eventbike/image/upload/c_scale,w_361/v1511497450/fonsi-fernandez-420911_vpetxg.jpg',
    'https://res.cloudinary.com/eventbike/image/upload/c_scale,w_230/v1511497453/mark-northern-454140_xewhho.jpg'
  ]
  end 

  def self.category_with_image
    result = []
    images = Event.category_images
    Event.categories.each_with_index do |category, idx|
      result << [category, images[idx]]
    end 
    result
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
