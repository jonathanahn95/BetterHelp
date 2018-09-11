class CreateBusinesses < ActiveRecord::Migration[5.2]
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
      t.integer :latitude, null: false
      t.integer :longitude, null: false
    end
  end
end
