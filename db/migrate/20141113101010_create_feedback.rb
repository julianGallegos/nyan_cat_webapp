class CreateFeedback < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.string :email
      t.text :content
    end
  end
end
