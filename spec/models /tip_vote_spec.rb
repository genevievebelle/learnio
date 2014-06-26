require 'spec_helper'
describe TipVote do
  it {should belong_to :user}
  it {should belong_to :tip}
  it {should have_db_index([:user_id, :tip_id])}
end
