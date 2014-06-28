class BreakoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :sum_tip_votes

  def sum_tip_votes
    sum = 0
    object.tips.each do |tip|
      sum += tip.tip_votes.count
    end
    sum
  end
end
