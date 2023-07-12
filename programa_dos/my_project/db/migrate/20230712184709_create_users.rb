class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.integer :age, null: false, default: 0
      t.string :mail, null: false
      t.string :type_desc, null: false

      t.timestamps
    end
  end
end
