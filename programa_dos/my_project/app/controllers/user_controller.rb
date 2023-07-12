class UserController < ApplicationController

  def create
    @user = User.new(name: params["name"] , age: params["age"] , mail: params["mail"], type_desc: params["type_desc"])
    respond_to do |format|
      if @user.save
        format.html { redirect_to root_path, notice: 'User was successfully created.' }
      else
        format.html { redirect_to root_path, notice: 'User was NOT successfully created.' }
      end
    end
  end


end
