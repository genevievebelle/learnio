require 'spec_helper'

describe Tip do

  let (:tip1){stub_model(Tip, content: 'I am a tip', breakout_id: 1)}
  let (:tip2){stub_model(Tip, content: 'What a great tip')}

  it {should have_many :tip_votes}
  it {should have_many(:votes_from_users).through(:tip_votes).source(:user)}

  it {should belong_to :breakout}
  it {should belong_to :user}

  it 'get loose tips' do
    @return = [tip1, tip2]
    Tip.stub(:where).and_return([tip2])
    expect(Tip.get_loose_tips).to eq([tip2])
  end

end

