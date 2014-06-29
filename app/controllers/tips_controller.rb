class TipsController < ApplicationController

  def index
    if params == nil
      render json: Tip.all, root:false
    elsif params[:breakout] == '0'
      render json: Tip.get_loose_tips, root: false
    else
      render json: Tip.where(breakout_id: params[:breakout]), root:false
    end
  end

  def update
    tip = Tip.find params[:id]
    tip.update_attributes(breakout_id: params[:breakout_id])
    render json: tip, root:false
  end

end
