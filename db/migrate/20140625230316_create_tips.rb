class CreateTips < ActiveRecord::Migration
  def change
    create_table :tips do |t|
      t.belongs_to :user
      t.belongs_to :breakout
      t.text :content, :required => true
      t.timestamps
    end
  end
end
