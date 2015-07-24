class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :no
      t.string :name
      t.text   :note

      t.string :leader_design
      t.string :leader_elec
      t.string :leader_manufacture

      t.string :start_plan_at
      t.string :start_at
      t.string :shipping_plan_at
      t.string :shipping_at
      t.string :debug_plan_at
      t.string :debug_at

      t.string :progress_goods
      t.string :progress_design
      t.string :progress_elec

      t.timestamps null: false
    end
  end
end
