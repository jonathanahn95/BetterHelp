class Createbusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.integer :owner_id
      t.string :name, null: false
      t.string :address, null: false
      t.string :hours, null: false
      t.string :phone_number, null: false
      t.string :website, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.integer :business_category_id, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end
    add_index :businesses, :address, unique: true
    add_index :businesses, :state
    add_index :businesses, :zip_code
    add_index :businesses, :business_category_id
  end
end
