class ChangeAttributeToAttributes < ActiveRecord::Migration[5.2]
  def change
    rename_table :attribute, :attributes
  end
end
