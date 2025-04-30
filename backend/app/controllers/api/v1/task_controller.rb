class Api::V1::TaskController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks
  end

end
