class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :creator, null:false 
      t.string :title, null: false 
      t.text :details
      t.timestamps
    end
  end
end
