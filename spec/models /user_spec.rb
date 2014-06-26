require 'spec_helper'
describe User do
  it {should have_many :tips}
  it {should have_many :breakouts}
  it {should have_many :tip_votes}
  it do
    should have_many(:votes_for_tips).
    through(:tip_votes).
    source(:tip)
  end
end

