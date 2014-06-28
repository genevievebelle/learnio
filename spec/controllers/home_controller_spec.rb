require 'spec_helper'

describe HomeController do
  before {get :index}
  it 'gets to homepage' do
    expect(response).to be_success
  end
  it 'shows the homepage' do
    expect(response).to render_template("index")
  end

end
