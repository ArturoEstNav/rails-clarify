class ChangeTypeName < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :type, :kind
  end
end
