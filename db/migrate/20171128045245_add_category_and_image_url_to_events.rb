class AddCategoryAndImageUrlToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :category, :string, null: false, default: "Other"
    remove_column :events, :image_url
    add_column :events, :image_url, :string, null: false, default: "http://res.cloudinary.com/eventbike/image/upload/v1511497420/alexa-wirth-6076_ltiq7z.jpg"
  end
end
