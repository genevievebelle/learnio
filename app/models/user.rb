class User < ActiveRecord::Base
  has_many :tip_votes
  has_many :votes_for_tips, through: :tip_votes, source: :tip

  has_many :breakouts
  has_many :tips
end
