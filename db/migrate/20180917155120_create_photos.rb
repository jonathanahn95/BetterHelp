class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :business_id, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
