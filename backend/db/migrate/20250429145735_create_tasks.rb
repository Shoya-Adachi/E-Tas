class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :period
      t.integer :status, null: false, default: 0

      t.timestamps
    end
  end
end
