class CreateFeedback < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.string :email
      t.text :content
      t.integer :nyan, default: 0
    end
  end
end
