class AddColsToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :date, :datetime
    add_column :events, :location, :string
  end
end
