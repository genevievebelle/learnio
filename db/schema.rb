# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140625233227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "breakout_votes", force: true do |t|
    t.integer  "user_id"
    t.integer  "breakout_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "breakout_votes", ["user_id", "breakout_id"], name: "index_breakout_votes_on_user_id_and_breakout_id", unique: true, using: :btree

  create_table "breakouts", force: true do |t|
    t.integer "user_id"
    t.string  "title"
  end

  create_table "tip_votes", force: true do |t|
    t.integer  "user_id"
    t.integer  "tip_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tip_votes", ["user_id", "tip_id"], name: "index_tip_votes_on_user_id_and_tip_id", unique: true, using: :btree

  create_table "tips", force: true do |t|
    t.integer "user_id"
    t.integer "breakout_id"
    t.text    "content"
  end

  create_table "users", force: true do |t|
    t.string "username"
    t.string "password_hash"
    t.string "password_salt"
    t.string "email"
  end

end
