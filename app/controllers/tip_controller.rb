class TipController < ApplicationController

  def index
    @loose_tips = Tip.get_loose_tips
    render json: @loose_tips
  end
end
