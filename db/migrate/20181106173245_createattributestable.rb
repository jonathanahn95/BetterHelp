class Createattributestable < ActiveRecord::Migration[5.2]
  def change
    create_table :attribute do |t|
      t.string :type
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.timestamps
    end
  end
end
