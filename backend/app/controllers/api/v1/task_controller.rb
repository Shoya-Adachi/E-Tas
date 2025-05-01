class Api::V1::TaskController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    tasks = Task.build(
      name: params[:name],      
      period: params[:period],  
    )

    if tasks.save
      render json: { status: 'success', data: tasks }, status: :created
    else
      render json: { status: 'error', errors: tasks.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    tasks = Task.find(params[:id])

    if tasks
      tasks.destroy
      head :no_content
    else
      render json: { error: 'task not found' }, status: :not_found
    end
  end

end
