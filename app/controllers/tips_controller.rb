class TipsController < ApplicationController

  def index
    render json: Tip.get_loose_tips, root: false
  end

end
