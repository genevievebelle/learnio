class CreateTipVotes < ActiveRecord::Migration
  def change
    create_table :tip_votes do |t|
      t.integer :user_id
      t.integer :tip_id
      t.timestamps
    end
    add_index :tip_votes, [:user_id, :tip_id], unique: true
  end
end
