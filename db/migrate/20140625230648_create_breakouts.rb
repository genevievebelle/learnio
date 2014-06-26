class CreateBreakouts < ActiveRecord::Migration
  def change
    create_table :breakouts do |t|
      t.belongs_to :user
      t.string :title, :required => true
      t.timestamps
    end
  end
end
