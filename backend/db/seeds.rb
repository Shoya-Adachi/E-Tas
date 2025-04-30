# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Task.create!(
    [
        {name: "買い物に行く", period: "2025-05-01", status: 0},
        {name: "勉強をする", period: "2025-05-01", status: 1},
        {name: "部屋を掃除する", period: "2025-05-01", status: 2},
    ]
)