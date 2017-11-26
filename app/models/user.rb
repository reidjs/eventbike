#Validation from a04
class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, length: { minimum: 3 }

  attr_reader :password

  has_many :events,
  class_name: :Event,
  primary_key: :id,
  foreign_key: :creator_id

  has_many :registrations,
  class_name: :Registration,
  primary_key: :id,
  foreign_key: :user_id

  has_many :bookmarks
  # class_name: :Bookmark,
  # primary_key: :id,
  # foreign_key: :user_id

  has_many :attending_events,
  through: :registrations,
  source: :event

  has_many :bookmarked_events,
  through: :bookmarks,
  source: :event


  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end
  
  #For looking up users by username only
  def to_param
    username
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
