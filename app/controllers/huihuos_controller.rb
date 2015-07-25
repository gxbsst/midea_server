class HuihuosController < ApplicationController
  # respond_to :json
  def index
    @project = Project.find(params[:project_id])
    @objects = Huihuo.where(project_id: params[:project_id])
  end
end
