class ChangeBookmarkColsToInt < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookmarks, :user_id
    remove_column :bookmarks, :event_id
    add_column :bookmarks, :user_id, :integer, null: false 
    add_column :bookmarks, :event_id, :integer, null: false 
  end
end
