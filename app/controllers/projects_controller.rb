class ProjectsController < ApplicationController
  # respond_to :json
  def index
   @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end
end
