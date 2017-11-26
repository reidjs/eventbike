class Bookmark < ApplicationRecord
  validates :event, :user, presence: true
  validates :event_id, uniqueness: {scope: :user_id}
  belongs_to :user
  belongs_to :event

end
