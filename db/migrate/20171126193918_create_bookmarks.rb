class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.string :user_id
      t.string :event_id 
      t.timestamps
    end
    add_index :bookmarks, [:user_id, :event_id], unique: true
  end
end
