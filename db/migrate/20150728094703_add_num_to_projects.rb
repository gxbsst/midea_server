class AddNumToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :num, :integer
  end
end
