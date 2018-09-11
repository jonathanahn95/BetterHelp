class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.integer :zipcode, null: false
      t.date :birthday
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :session_token, unique: true
  end
end
