require 'spec_helper'

describe TipsController do
  let (:tip1){stub_model(Tip, content: 'I am a tip')}
  let (:tip2){stub_model(Tip, content: 'What a great tip')}

  before do
    @return = [tip1, tip2]
    @return_json = "[{\"id\":1003,\"content\":\"I am a tip\",\"vote_count\":0},{\"id\":1004,\"content\":\"What a great tip\",\"vote_count\":0}]"
    Tip.stub(:where).and_return(@return)
    get :index
  end

  it 'gets to index' do
    expect(response).to be_success
  end

  it 'returns a list of loose tips with count and user vote status' do
    expect(response.body).to eq(@return_json)
  end

end
