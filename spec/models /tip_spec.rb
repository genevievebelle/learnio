require 'spec_helper'
describe Tip do
  it {should have_many :tip_votes}
  it {should have_many(:votes_from_users).through(:tip_votes).source(:user)}

  it {should belong_to :breakout}
  it {should belong_to :user}
end
