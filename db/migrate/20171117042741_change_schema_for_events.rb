class ChangeSchemaForEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :creator, :string
    add_column :events, :creator_id, :string
  end
end
