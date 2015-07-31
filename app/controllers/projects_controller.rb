class ProjectsController < ApplicationController
  # respond_to :json
  def index
    page = params[:page] || 1
    @projects = Project.all.page(page).per(1)
  end

  def show
    @project = Project.find(params[:id])
  end
end
