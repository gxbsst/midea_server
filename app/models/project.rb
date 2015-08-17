class Project < ActiveRecord::Base
  has_many :huihuos

  def state_enum
    [["正常", "normal"], ["异常", "exception"]]
  end
end
