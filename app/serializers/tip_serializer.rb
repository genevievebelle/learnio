class TipSerializer < ActiveModel::Serializer
  attributes :id, :content, :vote_count, :breakout_id #, :vote_status

  def vote_count
    object.tip_votes.count
  end

  # def vote_status
  #   if session[:user_id]
  #     user = user.find(:user_id)
  #     session[:user_id] && user.tip_votes.find(object.id) != nil
  #   end
  # end

end
