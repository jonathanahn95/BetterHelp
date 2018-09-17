# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BusinessCategory.destroy_all
Business.destroy_all
Review.destroy_all
User.destroy_all

User.create!([
  {fname: 'Lebron', lname: 'James', email: 'king_james@lakers.com', zipcode: 12345, birthday: 'Wed, 03 Mar 2016',password: 123123},
  {fname: 'Steve', lname: 'Bob', email: 'steve_bob@gmail.com', zipcode: 33333, birthday: 'Tues, 03 Feb 1995', password: 123123},
  {fname: 'Tony', lname: 'Stark', email: 'ironman@google.com', zipcode: 32121, birthday: 'Sun, 12 Jan 2003', password: 123123},
  {fname: 'Guest', lname: 'Demo', email: "guest@demo.org", zipcode: 32121, birthday: 'Sun, 12 Jan 2003', password: 123123}
  ])
users = User.all


BusinessCategory.create!([
  {category: 'Restaurant'},
  {category: 'Home Services'},
  {category: 'Cafes'},
  {category: 'Bootcamps'}
])

business_categories = BusinessCategory.all

Business.create!([
  {name: 'Chipotle', address: "28 W 40th St", hours: ["10:45am - 11:00pm" , "10:45am - 11:00pm ",	"10:45am - 11:00pm",	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm"],
  phone_number: '(212) 302-0650', website: 'https://www.chipotle.com/', city: "New York", state: "NY", zip_code: 10018, business_category_id: business_categories[0].id, latitude: 24.0, longitude: 80.3036},
  {name: 'Shake Shack', address: "1 Old Fulton St", hours: ["9:45 am - 9:00 pm" ,"	9:45 am - 9:00 pm ",	"9:45 am - 9:00 pm"	,"9:45 am - 9:00 pm" ,"9:45 am - 9:00 pm" ,	"9:45 am - 9:00 pm" ,	"9:45 am - 9:00 pm"],
  phone_number: '(347) 435-2676', website: 'https://www.shake-shack.com/', city: "Brooklyn", state: "NY", zip_code: 11201, business_category_id: business_categories[0].id, latitude: -120.451, longitude: 60.63 },
  {name: 'JC Landscaping and Design', address: "68-19 Woodhaven Blvd", hours: ["9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"	,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"],
  phone_number: '(718) 672-7323', website: 'https://www.jcdesignscapes.com.com/', city: "Queens", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 99.012, longitude: 40.23 },
  {name: 'Bean and Bean', address: "318 8th Ave", hours: ["9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"	,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"],
  phone_number: '(646) 869-2070', website: 'https://beannbean.com.com/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[2].id, latitude: -45.321, longitude: 77.27 },
  {name: 'App Academy', address: "159 W 25th St", hours: ["9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"	,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"],
  phone_number: '(123) 718-3213', website: 'https://www.appacademy.io/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[3].id ,latitude: 67.6723, longitude: 34.21 }
  ])

  businesses = Business.all




  Review.create!([
    {user_id: users[0].id, business_id: businesses[0].id, rating: 4, body: 'I love this place and I would def come back here. Customer service was great and I was able to enjoy my meal in peace. Definetly going to come back.' },
    {user_id: users[0].id, business_id: businesses[1].id, rating: 2, body: 'Took forever to get my food and everyone there had an attitude. Probably will not come back to this location for a very long time' },
    {user_id: users[1].id, business_id: businesses[1].id, rating: 5, body: 'Who doesnt love Shake Shack! Burgers and fries all dayyyyyy' },
    {user_id: users[2].id, business_id: businesses[4].id, rating: 4, body: 'This place has changed me. Instructors are great and environment is great. I learned more than I could ever imagine. Coding for life!' },
    {user_id: users[0].id, business_id: businesses[3].id, rating: 3, body: 'My go to spot to study and chat with friends over some coffee. Love the atmopshere and such a clean and tidy place.' },
    {user_id: users[2].id, business_id: businesses[2].id, rating: 5, body: 'JC for the win!! I love my experience with dealing with them and I would definetly call them back if I ever had any issues. If my friends ever needed help then I would recommended them JC!' }


    ])

    reviews = Review.all


  Photo.create!([
    {business_id: businesses[0].id, image_url: 'assets/chip1.jpg'},
    {business_id: businesses[0].id, image_url: 'assets/chip2.jpg'},
    {business_id: businesses[0].id, image_url: 'assets/chip3.jpg'},
    {business_id: businesses[0].id, image_url: 'assets/chip4.jpg'},
    {business_id: businesses[1].id, image_url: 'assets/shake1.jpg'},
    {business_id: businesses[1].id, image_url: 'assets/shake2.jpg'},
    {business_id: businesses[1].id, image_url: 'assets/shake3.jpg'},
    {business_id: businesses[1].id, image_url: 'assets/shake4.jpg'},
    {business_id: businesses[2].id, image_url: 'assets/jc1.jpg'},
    {business_id: businesses[2].id, image_url: 'assets/jc2.jpg'},
    {business_id: businesses[2].id, image_url: 'assets/jc3.jpg'},
    {business_id: businesses[2].id, image_url: 'assets/jc4.jpg'},
    {business_id: businesses[3].id, image_url: 'assets/bb1.jpg'},
    {business_id: businesses[3].id, image_url: 'assets/bb2.jpg'},
    {business_id: businesses[3].id, image_url: 'assets/bb3.jpg'},
    {business_id: businesses[3].id, image_url: 'assets/bb4.jpg'},
    {business_id: businesses[4].id, image_url: 'assets/aa1.jpg'},
    {business_id: businesses[4].id, image_url: 'assets/aa2.jpg'},
    {business_id: businesses[4].id, image_url: 'assets/aa3.jpg'},
    {business_id: businesses[4].id, image_url: 'assets/aa4.jpg'}
    ])
