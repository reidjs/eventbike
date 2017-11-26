class ForceBookmarkNotNull < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookmarks, :user_id
    remove_column :bookmarks, :event_id
    add_column :bookmarks, :user_id, :string, null: false 
    add_column :bookmarks, :event_id, :string, null: false 

  end
end
