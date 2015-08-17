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

ActiveRecord::Schema.define(version: 20150817065121) do

  create_table "huihuos", force: :cascade do |t|
    t.integer  "project_id"
    t.string   "name"
    t.string   "blueprint_no"
    t.integer  "num"
    t.string   "unit"
    t.integer  "total"
    t.string   "material"
    t.string   "material_handle"
    t.string   "design_require_at"
    t.string   "order_at"
    t.string   "arrival_plan_at"
    t.string   "arrival_at"
    t.string   "supplier"
    t.text     "note"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "no"
    t.string   "name"
    t.text     "note"
    t.string   "leader_design"
    t.string   "leader_elec"
    t.string   "leader_manufacture"
    t.string   "start_plan_at"
    t.string   "start_at"
    t.string   "shipping_plan_at"
    t.string   "shipping_at"
    t.string   "debug_plan_at"
    t.string   "debug_at"
    t.string   "progress_goods"
    t.string   "progress_design"
    t.string   "progress_elec"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "num"
    t.string   "state"
  end

end
