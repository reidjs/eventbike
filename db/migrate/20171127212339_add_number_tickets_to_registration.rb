class AddNumberTicketsToRegistration < ActiveRecord::Migration[5.1]
  def change
    add_column :registrations, :tickets, :integer
  end
end
