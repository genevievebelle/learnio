class TipsController < ApplicationController

  def index
    if params == nil
      render json: Tip.all, root:false
    elsif params[:breakout] == 'none'
      render json: Tip.get_loose_tips, root: false
    else
      render json: Tip.find_by_breakout_id(params[:breakout]), root:false
    end
  end

end
