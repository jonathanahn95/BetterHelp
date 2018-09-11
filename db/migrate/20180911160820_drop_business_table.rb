class DropBusinessTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :businesses
  end
end
