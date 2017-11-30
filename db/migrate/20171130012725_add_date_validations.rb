class AddDateValidations < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :date
    remove_column :events, :location
    add_column :events, :date, :datetime, null: false
    add_column :events, :location, :string, null: false
  end
end
