class TipsController < ApplicationController

  def index
    if params[:breakout] == 'none'
      render json: Tip.get_loose_tips, root: false
    else
      render json: Tip.all, root:false
    end
  end

end
