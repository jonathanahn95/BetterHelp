class Changecoltobusiness < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :delivery
    remove_column :businesses, :noise
    add_column :businesses, :noise, :integer
    add_column :businesses, :delivery, :integer

  end
end
