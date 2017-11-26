class AddIndexToRegistration < ActiveRecord::Migration[5.1]
  def change
    #the one to eliminate the most goes first. In relation to the two, they must be unique
    add_index :registrations, [:user_id, :event_id], unique: true
  end
end
