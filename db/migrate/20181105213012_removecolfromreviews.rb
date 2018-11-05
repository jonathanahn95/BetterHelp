class Removecolfromreviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :cool
    remove_column :reviews, :useful
    remove_column :reviews, :funny
    remove_column :reviews, :like

  end
end
