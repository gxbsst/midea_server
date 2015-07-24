class CreateHuihuos < ActiveRecord::Migration
  def change
    create_table :huihuos do |t|
      t.references :project
      t.string :name
      t.string :blueprint_no
      t.integer :num
      t.string :unit
      t.integer :total
      t.string :material
      t.string :material_handle
      t.string :design_require_at
      t.string :order_at
      t.string :arrival_plan_at
      t.string :arrival_at
      t.string :supplier
      t.text :note

      t.timestamps null: false
    end
  end
end
