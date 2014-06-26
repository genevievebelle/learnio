class Breakout < ActiveRecord::Base
  belongs_to :user
  has_many :tips
  has_many :tip_votes, through: :tips
end
