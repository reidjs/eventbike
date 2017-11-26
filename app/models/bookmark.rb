class Bookmark < ApplicationRecord
  validates :event_id, :user_id, presence: true
  validates :event_id, uniqueness: {scope: :user_id}
  belongs_to :event
  belongs_to :user
end
