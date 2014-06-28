require 'factory_girl_rails'
10.times { FactoryGirl.create :tip}
10.times { FactoryGirl.create :user}
3.times { FactoryGirl.create :breakout}

Tip.all.each do |tip|
  User.all.each do |user|
    TipVote.create(tip_id: tip.id, user_id: user.id) if Random.rand<0.2
  end
end

Tip.all.each do |tip|
  Breakout.all.sample.tips << tip if Random.rand<0.8
  User.all.sample.tips << tip
end




