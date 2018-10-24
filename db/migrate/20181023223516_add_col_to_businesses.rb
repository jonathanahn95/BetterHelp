class AddColToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price, :integer
  end
end
