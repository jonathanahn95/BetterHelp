class AddColToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :like, :integer
    add_column :reviews, :funny, :integer
    add_column :reviews, :useful, :integer
    add_column :reviews, :cool, :integer
  end
end
