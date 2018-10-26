class Changecolinbusiniess < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :delivery
    add_column :businesses, :delivery, :string

  end
end
