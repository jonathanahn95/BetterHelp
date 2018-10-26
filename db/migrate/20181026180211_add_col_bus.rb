class AddColBus < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :delivery, :boolean
    add_column :businesses, :noise, :string

  end
end
