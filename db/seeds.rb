# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BusinessCategory.destroy_all
Business.destroy_all


BusinessCategory.create!([
  {category: 'Restaurant'},
  {category: 'Home Services'},
  {category: 'Cafes'},
  {category: 'Bootcamps'}
])

business_categories = BusinessCategory.all

Business.create!([
  {name: 'Chipotle', address: "28 W 40th St", hours: "
  Mon	10:45 am - 11:00 pm Tue	10:45 am - 11:00 pm Wed	10:45 am - 11:00 pm	Thu	10:45 am - 11:00 pm Fri	10:45 am - 11:00 pm Sat	10:45 am - 11:00 pm Sun	10:45 am - 11:00 pm",
  phone_number: '(212) 302-0650', website: 'https://www.chipotle.com/', city: "New York", state: "NY", zip_code: 10018, business_category_id: business_categories[0].id, latitude: 24.0, longitude: 80.3036 },
  {name: 'Shake Shack', address: "1 Old Fulton St", hours: "
    Mon	9:45 am - 9:00 pm Tue	9:45 am - 9:00 pm Wed	9:45 am - 9:00 pm	Thu	9:45 am - 9:00 pm Fri	9:45 am - 9:00 pm Sat	9:45 am - 9:00 pm Sun	9:45 am - 9:00 pm",
  phone_number: '(347) 435-2676', website: 'https://www.shake-shack.com/', city: "Brooklyn", state: "NY", zip_code: 11201, business_category_id: business_categories[0].id, latitude: -120.451, longitude: 60.63 },
  {name: 'JC Landscaping and Design', address: "68-19 Woodhaven Blvd", hours: "
    Mon	9:00 am - 5:00 pm Tue	9:00 am - 5:00 pm Wed	9:00 am - 5:00 pm	Thu	9:00 am - 5:00 pm Fri	9:00 am - 5:00 pm Sat	9:00 am - 5:00 pm Sun	9:00 am - 5:00 pm",
  phone_number: '(718) 672-7323', website: 'https://www.jcdesignscapes.com.com/', city: "Queens", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 99.012, longitude: 40.23 },
  {name: 'Bean and Bean', address: "318 8th Ave", hours: "
    Mon	9:45 am - 10:30 pm Tue	9:45 am - 10:30 pm Wed	9:45 am - 10:30 pm	Thu	9:45 am - 10:30 pm Fri	9:45 am - 10:30 pm Sat	9:45 am - 10:30 pm Sun	9:45 am - 10:30 pm",
  phone_number: '(646) 869-2070', website: 'https://beannbean.com.com/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[2].id, latitude: -45.321, longitude: 77.27 },
  {name: 'App Academy', address: "159 W 25th St", hours: "
    Mon	9:00 - 5:00 pm Tue	9:00 - 5:00 pm Wed	9:00 - 5:00 pm	Thu	9:00 - 5:00 pm Fri	9:00 - 5:00 pm Sat	9:00 - 5:00 pm Sun	9:00 - 5:00 pm",
  phone_number: '(123) 718-3213', website: 'https://www.appacademy.io/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[3].id ,latitude: 67.6723, longitude: 34.21 },
  ])
