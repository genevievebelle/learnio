FactoryGirl.define do

  factory :tip do
    sequence(:id) { |n| "#{n}" }
    sequence(:content) { |n| "Example content for tip #{n}" }
  end

  factory :user do
    sequence(:id) { |n| "#{n}" }
    sequence(:username) { |n| "User number #{n}"}
    email "user@example.com"
  end

  factory :breakout do
    sequence(:id) { |n| "#{n}" }
    sequence(:title) { |n| "Breakout number #{n}"}
  end


end
