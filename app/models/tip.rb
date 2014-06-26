class Tip < ActiveRecord::Base
  has_many :tip_votes
  has_many :votes_from_users, through: :tip_votes, source: :users

  belongs_to :breakout
  belongs_to :user
end
