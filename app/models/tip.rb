class Tip < ActiveRecord::Base
  has_many :tip_votes
  has_many :votes_from_users, through: :tip_votes, source: :user

  belongs_to :breakout
  belongs_to :user

  def get_loose_tips
    Tips.where(tip.breakout_id == nil)
  end

end
