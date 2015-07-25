json.array! @objects do |huihuo|
  json.extract! huihuo, :id,
                :name,
                :blueprint_no,
                :num,
                :unit,
                :total,
                :material,
                :material_handle,
                :design_require_at,
                :order_at,
                :arrival_plan_at,
                :arrival_at,
                :supplier,
                :note
  json.project_no @project.no
end