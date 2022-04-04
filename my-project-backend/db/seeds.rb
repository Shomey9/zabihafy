puts "🌱 Seeding..."

# Seed your database here

# Clearing Our Tables
puts "Clearing Our Tables..."
User.destroy_all
Restaurant.destroy_all
# User Seeds
user1 = User.create(
    name: "Sam",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512",
)
user2 = User.create(
    name: "Hilda",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-U023M081M0W-a1410bf66ddd-512",
)
user1 = User.create(
    name: "Marcos",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-U02F5FNANQK-5483c54cdb27-512",
)

# Restaurant Seeds
restaurant1 = Restaurant.create(
    restaurant_name: "Lasbela Restaurant & Catering"
)

# User Reviews Seeds
r1 = Review.create(
    user_id: user1.id,
    name: user1.name
    comment: "It was okay",
    restaurant_id: restaurant1.id,
    restaurant_name: restaurant1.restaurant_name
)

puts "✅ Done seeding!"
