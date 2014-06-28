class BreakoutsController < ApplicationController

  def index
    render json: Breakout.all, root:false
  end
end
