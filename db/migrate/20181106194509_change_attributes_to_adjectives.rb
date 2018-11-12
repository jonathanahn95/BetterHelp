class ChangeAttributesToAdjectives < ActiveRecord::Migration[5.2]
  def change
    rename_table :attributes, :adjectives

  end
end
