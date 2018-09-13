class CreateBusinessCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :business_categories do |t|
      t.string :category, null: false
      t.timestamps
    end
    add_index :business_categories, :category

  end
end
