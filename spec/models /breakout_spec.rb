require 'spec_helper'
describe Breakout do
  it {should belong_to :user}
  it {should have_many :tips}
  it {should have_many(:tip_votes).through(:tips)}
end
