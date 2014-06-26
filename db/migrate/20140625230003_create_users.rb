
class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, :required => true
      t.string :password_hash
      t.string :password_salt
      t.string :email, :required => true
    end
  end
end
