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

  {name: 'Burger and Lobster', address: "39 W 19th St", hours: ["10:45am - 11:00pm" , "10:45am - 11:00pm ",	"10:45am - 11:00pm",	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm"],
  phone_number: '(646) 833-7532', website: 'https://www.burgerandlobster.com/', city: "New York", state: "NY", zip_code: 10018, business_category_id: business_categories[0].id, latitude: 41.915495, longitude: -74.002210, price: 3, noise: 3, delivery: 0},
  {name: 'Juliana’s Pizza', address: "19 Old Fulton St", hours: ["10:45am - 11:00pm" , "10:45am - 11:00pm ",	"10:45am - 11:00pm",	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm"],
  phone_number: '(718) 596-6700', website: 'https://julianaspizza.com/', city: "New York", state: "NY", zip_code: 10018, business_category_id: business_categories[0].id, latitude: 41.915495, longitude: -74.502210, price: 2, noise: 2, delivery: 1},
  {name: 'Joe’s Shanghai', address: "9 Pell St", hours: ["10:45am - 11:00pm" , "10:45am - 11:00pm ",	"10:45am - 11:00pm",	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm"],
  phone_number: '(718) 596-6700', website: 'https://joeshanghairestaurants.com', city: "New York", state: "NY", zip_code: 10018, business_category_id: business_categories[0].id, latitude: 41.115495, longitude: -74.502210, price: 2, noise: 3, delivery: 0},
  {name: 'Chipotle', address: "28 W 40th St", hours: ["10:45am - 11:00pm" , "10:45am - 11:00pm ",	"10:45am - 11:00pm",	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm" ,	"10:45am - 11:00pm"],
  phone_number: '(212) 302-0650', website: 'https://www.chipotle.com/', city: "New York", state: "NY", zip_code: 10018, business_category_id: business_categories[0].id, latitude: 40.915495, longitude: -74.002210, price: 1, noise: 2, delivery: 0},
  {name: 'Shake Shack', address: "1 Old Fulton St", hours: ["9:45 am - 9:00 pm" ,"	9:45 am - 9:00 pm ",	"9:45 am - 9:00 pm"	,"9:45 am - 9:00 pm" ,"9:45 am - 9:00 pm" ,	"9:45 am - 9:00 pm" ,	"9:45 am - 9:00 pm"],
  phone_number: '(347) 435-2676', website: 'https://www.shake-shack.com/', city: "Brooklyn", state: "NY", zip_code: 11201, business_category_id: business_categories[0].id, latitude: 41.615488, longitude: -74.002300, price: 2, noise: 4, delivery: 0 },
  {name: 'Carpet Cleaners', address: "740 Park Ave", hours: ["9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"	,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"],
  phone_number: '(917) 410-1761', website: 'https://www.carpetcleaningnycpro.com', city: "Queens", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 41.888888, longitude: -73.899999, price: 2, noise: 4, delivery: 1 },
  {name: 'MaidStay', address: "330 Washington St", hours: ["9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"	,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"],
  phone_number: '(201) 855-9052', website: 'https://www.maidstay.com', city: "Queens", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 41.888888, longitude: -73.777777, price: 3, noise: 1 , delivery: 1},
  {name: 'Orbit Security', address: "442 Broadway Fl 2", hours: ["9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"	,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"],
  phone_number: '(718) 855-9052', website: 'https://www.orbitsecuritysystems.com', city: "Queens", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 41.331122, longitude: -73.331122, price: 3, noise: 1, delivery: 1 },
  {name: 'Right Lawn Care Inc', address: "148-21 90th Ave", hours: ["9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"	,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"],
  phone_number: '(718) 122-7323', website: 'https://www.rightlawncare.com', city: "Jamaica", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 40.631888, longitude: -73.899999, price: 1, noise: 2, delivery: 1 },
  {name: 'JC Landscaping and Design', address: "68-19 Woodhaven Blvd", hours: ["9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"	,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"],
  phone_number: '(718) 672-7323', website: 'https://www.jcdesignscapes.com/', city: "Queens", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 40.888888, longitude: -73.899999, price: 4, noise: 2, delivery: 1 },
  {name: 'Bean and Bean', address: "318 8th Ave", hours: ["9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"	,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"],
  phone_number: '(646) 869-2070', website: 'https://beannbean.com/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[2].id, latitude: 41.339181, longitude: -73.703888, price: 1, noise: 3 , delivery: 0},
  {name: 'Absolute Coffee', address: "327 Atlantic Ave", hours: ["9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"	,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"],
  phone_number: '(646) 869-2070', website: 'https://absolutecoffee.nyc', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[2].id, latitude: 41.339181, longitude: -73.703888, price: 1, noise: 1 , delivery: 0},
  {name: 'White Noise Coffee', address: "41-02 162st", hours: ["8:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm"	,	"8:45 am - 10:30 pm" ,	"10:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm"],
  phone_number: '(646) 869-2070', website: 'https://beannbean.com/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[2].id, latitude: 41.111222, longitude: -73.701888, price: 1, noise: 1, delivery: 1 },
  {name: 'Cafe de Cupping', address: "150-07 Northern Blvd", hours: ["8:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm"	,	"8:45 am - 10:30 pm" ,	"10:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm" ,	"8:45 am - 10:30 pm"],
  phone_number: '(646) 869-2070', website: 'https://cafedecupping.com/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[2].id, latitude: 41.231032, longitude: -73.701888, price: 2, noise: 2 , delivery: 0},
  {name: 'App Academy', address: "159 W 25th St", hours: ["9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"	,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"],
  phone_number: '(929) 718-3213', website: 'https://www.appacademy.io/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[3].id ,latitude: 41.565213, longitude: -73.002218, price: 4, noise: 4 , delivery: 0},
  {name: 'Warrior Boot Camp', address: "240 Wtythe Ave", hours: ["7:00 - 5:00 pm" ,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm"	,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm"],
  phone_number: '(718) 718-3213', website: 'http://www.warriorfitnessbootcamp.com/', city: "Brooklyn", state: "NY", zip_code: 11249, business_category_id: business_categories[3].id ,latitude: 40.565213, longitude: -74.002218, price: 3, noise: 4 , delivery: 0},
  {name: 'Trooper Fitness', address: "226 E 54th St", hours: ["7:00 - 5:00 pm" ,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm"	,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm" ,	"7:00 - 5:00 pm"],
  phone_number: '(347) 718-3213', website: 'https://trooperfitness.com/', city: "New York", state: "NY", zip_code: 11249, business_category_id: business_categories[3].id ,latitude: 40.900000, longitude: -74.002218, price: 3, noise: 3 , delivery: 0},
  {name: 'Flatiron School', address: "11 Broadway", hours: ["9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"	,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"],
  phone_number: '(929) 718-3213', website: 'https://flatironschool.com', city: "New York", state: "NY", zip_code: 10004, business_category_id: business_categories[3].id ,latitude: 41.631133, longitude: -72.002218, price: 4, noise: 2 , delivery: 0},
  {name: 'Fullstack Academy', address: "48 W 42 E", hours: ["9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"	,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"],
  phone_number: '(718) 718-3213', website: 'https://www.fullstackacademy.com/', city: "New York", state: "NY", zip_code: 10004, business_category_id: business_categories[3].id ,latitude: 40.331133, longitude: -72.002218, price: 4, noise: 4 , delivery: 0},
  {name: 'Coffee Project NY', address: "239 E 5th St", hours: ["9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"	,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"],
  phone_number: '(929) 718-3213', website: 'https://coffeeprojectny.com', city: "New York", state: "NY", zip_code: 10004, business_category_id: business_categories[2].id ,latitude: 40.333111, longitude: -71.002218, price: 3 , noise: 3, delivery: 0},

  ])

  businesses = Business.all.sort_by { |bus| bus.name }


  absc1 = businesses[0]
  abscp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/absc1.jpg")
  absc1.photos.attach(io: abscp1, filename: 'absc1.jpg')
  absc1.save!

  absc2 = businesses[0]
  abscp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/absc2.jpg")
  absc2.photos.attach(io: abscp2, filename: 'absc2.jpg')
  absc2.save!

  absc3 = businesses[0]
  abscp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/absc3.jpg")
  absc3.photos.attach(io: abscp3, filename: 'absc3.jpg')
  absc3.save!

  absc4 = businesses[0]
  abscp4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/absc4.jpg")
  absc4.photos.attach(io: abscp4, filename: 'absc4.jpg')
  absc4.save!

  aa1 = businesses[1]
  file16 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/appa.jpg")
  aa1.photos.attach(io: file16, filename: 'app-academy.jpg')
  aa1.save!


  aa2 = businesses[1]
  file17 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/aa2.jpg")
  aa2.photos.attach(io: file17, filename: 'aa2.jpg')
  aa2.save!


  aa3 = businesses[1]
  file18 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/aa3.jpg")
  aa3.photos.attach(io: file18, filename: 'aa3.jpg')
  aa3.save!

  aa4 = businesses[1]
  file19 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/aa4.jpg")
  aa4.photos.attach(io: file19, filename: 'aa4.jpg')
  aa4.save!

  bb1 = businesses[2]
  file12 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb1.jpg")
  bb1.photos.attach(io: file12, filename: 'bb1.jpg')
  bb1.save!

  bb2 = businesses[2]
  file13 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb2.jpg")
  bb2.photos.attach(io: file13, filename: 'bb2.jpg')
  bb2.save!

  bb3 = businesses[2]
  file14 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb3.jpg")
  bb3.photos.attach(io: file14, filename: 'bb3.jpg')
  bb3.save!

  bb4 = businesses[2]
  file15 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb4.jpg")
  bb4.photos.attach(io: file15, filename: 'bb4.jpg')
  bb4.save!

  bl1 = businesses[3]
  blp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bl1.jpg")
  bl1.photos.attach(io: blp1, filename: 'bl1.jpg')
  bl1.save!

  bl2 = businesses[3]
  blp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bl2.jpg")
  bl2.photos.attach(io: blp2, filename: 'bl2.jpg')
  bl2.save!

  bl3 = businesses[3]
  blp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bl3.jpg")
  bl3.photos.attach(io: blp3, filename: 'bl3.jpg')
  bl3.save!

  bl4 = businesses[3]
  blp4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bl4.jpg")
  bl4.photos.attach(io: blp4, filename: 'bl4.jpg')
  bl4.save!

  cad1 = businesses[4]
  cadp1 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/cad1.png')
  cad1.photos.attach(io: cadp1, filename: 'cad1.png')
  cad1.save!

  cad2 = businesses[4]
  cadp2 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/cad2.png')
  cad2.photos.attach(io: cadp2, filename: 'cad2.png')
  cad2.save!

  cad3 = businesses[4]
  cadp3 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/cad3.png')
  cad3.photos.attach(io: cadp3, filename: 'cad3.png')
  cad3.save!

  cad4 = businesses[4]
  cadp3 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/cad4.png')
  cad4.photos.attach(io: cadp3, filename: 'cad4.png')
  cad4.save!

  ccn1 = businesses[5]
  ccnp1 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/ccn1.png')
  ccn1.photos.attach(io: ccnp1, filename: 'ccn1.png')
  ccn1.save!

  ccn2 = businesses[5]
  ccnp2 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/ccn2.png')
  ccn2.photos.attach(io: ccnp2, filename: 'ccn2.png')
  ccn2.save!

  ccn3 = businesses[5]
  ccnp3 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/ccn3.png')
  ccn3.photos.attach(io: ccnp3, filename: 'ccn3.png')
  ccn3.save!

  ccn4 = businesses[5]
  ccnp4 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/ccn4.png')
  ccn4.photos.attach(io: ccnp4, filename: 'ccn4.png')
  ccn4.save!

  chip1 = businesses[6]
  file = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/chip1.jpg')
  chip1.photos.attach(io: file, filename: 'chip1.jpg')
  chip1.save!

  chip2 = businesses[6]
  file1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/chip2.jpg")
  chip2.photos.attach(io: file1, filename: 'chip2.jpg')
  chip2.save!

  chip3 = businesses[6]
  file2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/chip3.jpg")
  chip3.photos.attach(io: file2, filename: 'chip3.jpg')
  chip3.save!

  chip4 = businesses[6]
  file3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/chip4.jpg")
  chip4.photos.attach(io: file3, filename: 'chip4.jpg')
  chip4.save!

  cny1 = businesses[7]
  cnyp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/cny1.png")
  cny1.photos.attach(io: cnyp1, filename: 'cny1.png')
  cny1.save!

  cny2 = businesses[7]
  cnyp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/cny2.png")
  cny2.photos.attach(io: cnyp2, filename: 'cny2.png')
  cny2.save!

  cny3 = businesses[7]
  cnyp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/cny3.png")
  cny3.photos.attach(io: cnyp3, filename: 'cny3.png')
  cny3.save!

  cny4 = businesses[7]
  cnyp4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/cny4.png")
  cny4.photos.attach(io: cnyp4, filename: 'cny4.png')
  cny4.save!

  fi1 = businesses[8]
  fip1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fi1.png")
  fi1.photos.attach(io: fip1, filename: 'fi1.png')
  fi1.save!

  fi2 = businesses[8]
  fip2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fi2.png")
  fi2.photos.attach(io: fip2, filename: 'fi2.png')
  fi2.save!

  fi3 = businesses[8]
  fip3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fi3.png")
  fi3.photos.attach(io: fip3, filename: 'fi3.png')
  fi3.save!

  fi4 = businesses[8]
  fip4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fi4.png")
  fi4.photos.attach(io: fip4, filename: 'fi4.png')
  fi4.save!

  fs1 = businesses[9]
  fsp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fs1.png")
  fs1.photos.attach(io: fsp1, filename: 'fs1.png')
  fs1.save!

  fs2 = businesses[9]
  fsp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fs2.png")
  fs2.photos.attach(io: fsp2, filename: 'fs2.png')
  fs2.save!

  fs3 = businesses[9]
  fsp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fs3.png")
  fs3.photos.attach(io: fsp3, filename: 'fs3.png')
  fs3.save!

  fs4 = businesses[9]
  fsp4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/fs4.png")
  fs4.photos.attach(io: fsp4, filename: 'fs4.png')
  fs4.save!

  jc1 = businesses[10]
  file8 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc1.jpg")
  jc1.photos.attach(io: file8, filename: 'jc1.jpg')
  jc1.save!

  jc2 = businesses[10]
  file9 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc2.jpg")
  jc2.photos.attach(io: file9, filename: 'jc2.jpg')
  jc2.save!

  jc3 = businesses[10]
  file10 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc3.jpg")
  jc3.photos.attach(io: file10, filename: 'jc3.jpg')
  jc3.save!

  jc4 = businesses[10]
  file11 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc4.jpg")
  jc4.photos.attach(io: file11, filename: 'jc4.jpg')
  jc4.save!


  jsh1 = businesses[11]
  jshp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jsh1.jpg")
  jsh1.photos.attach(io: jshp1, filename: 'jsh1.jpg')
  jsh1.save!

  jsh2 = businesses[11]
  jsph2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jsh2.jpg")
  jsh2.photos.attach(io: jsph2, filename: 'jsh2.jpg')
  jsh2.save!

  jsh3 = businesses[11]
  jsph3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jsh3.jpg")
  jsh3.photos.attach(io: jsph3, filename: 'jsh3.jpg')
  jsh3.save!

  jsh4 = businesses[11]
  jsph3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jsh4.jpg")
  jsh4.photos.attach(io: jsph3, filename: 'jsh4.jpg')
  jsh4.save!

  jp1 = businesses[12]
  jpp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jp1.jpg")
  jp1.photos.attach(io: jpp1, filename: 'jp1.jpg')
  jp1.save!

  jp2 = businesses[12]
  jpp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jp2.jpg")
  jp2.photos.attach(io: jpp2, filename: 'jp2.jpg')
  jp2.save!

  jp3 = businesses[12]
  jpp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jp3.jpg")
  jp3.photos.attach(io: jpp3, filename: 'jp3.jpg')
  jp3.save!

  jp4 = businesses[12]
  jpp4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jp4.jpg")
  jp4.photos.attach(io: jpp4, filename: 'jp4.jpg')
  jp4.save!


  ms1 = businesses[13]
  msp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/ms1.jpg")
  ms1.photos.attach(io: msp1, filename: 'ms1.jpg')
  ms1.save!

  ms2 = businesses[13]
  msp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/ms2.jpg")
  ms2.photos.attach(io: msp2, filename: 'ms2.jpg')
  ms2.save!

  ms3 = businesses[13]
  msp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/ms3.jpg")
  ms3.photos.attach(io: msp3, filename: 'ms3.jpg')
  ms3.save!

  ms4 = businesses[13]
  msp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/ms4.jpg")
  ms4.photos.attach(io: msp1, filename: 'ms4.jpg')
  ms4.save!

  oss1 = businesses[14]
  ossp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/oss1.jpg")
  oss1.photos.attach(io: ossp1, filename: 'oss1.jpg')
  oss1.save!

  oss2 = businesses[14]
  ossp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/oss2.jpg")
  oss2.photos.attach(io: ossp2, filename: 'oss2.jpg')
  oss2.save!

  oss3 = businesses[14]
  ossp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/oss3.jpg")
  oss3.photos.attach(io: ossp3, filename: 'oss3.jpg')
  oss3.save!

  oss4 = businesses[14]
  ossp4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/oss4.jpg")
  oss4.photos.attach(io: ossp4, filename: 'oss4.jpg')
  oss4.save!

  rlc1 = businesses[15]
  rlcp1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/rlc1.jpg")
  rlc1.photos.attach(io: rlcp1, filename: 'rlc1.jpg')
  rlc1.save!

  rlc2 = businesses[15]
  rlcp2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/rlc2.jpg")
  rlc2.photos.attach(io: rlcp2, filename: 'rlc2.jpg')
  rlc2.save!

  rlc3 = businesses[15]
  rlcp3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/rlc3.jpg")
  rlc3.photos.attach(io: rlcp3, filename: 'rlc3.jpg')
  rlc3.save!

  rlc4 = businesses[15]
  rlcp4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/rlc4.jpg")
  rlc4.photos.attach(io: rlcp4, filename: 'rlc4.jpg')
  rlc4.save!

  ss1 = businesses[16]
  file4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake1.jpg")
  ss1.photos.attach(io: file4, filename: 'shake1.jpg')
  ss1.save!

  ss2 = businesses[16]
  file5 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake2.jpg")
  ss2.photos.attach(io: file5, filename: 'shake2.jpg')
  ss2.save!

  ss3 = businesses[16]
  file6 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake3.jpg")
  ss3.photos.attach(io: file6, filename: 'shake3.jpg')
  ss3.save!

  ss4 = businesses[16]
  file7 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake4.jpg")
  ss4.photos.attach(io: file7, filename: 'shake4.jpg')
  ss4.save!

  bb1 = businesses[17]
  bp1 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/bp1.png')
  bb1.photos.attach(io: bp1, filename: 'bp1.png')
  bb1.save!

  bb2 = businesses[17]
  bp2 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/bp2.png')
  bb2.photos.attach(io: bp2, filename: 'bp2.png')
  bb2.save!

  bb3 = businesses[17]
  bp3 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/bp3.png')
  bb3.photos.attach(io: bp3, filename: 'bp3.png')
  bb3.save!

  bb4 = businesses[17]
  bp4 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/bp4.png')
  bb4.photos.attach(io: bp4, filename: 'bp4.png')
  bb4.save!

  chip5 = businesses[18]
  p = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/war4.png')
  chip5.photos.attach(io: p, filename: 'war4.png')
  chip5.save!

  chip6 = businesses[18]
  p2 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/war3.png')
  chip6.photos.attach(io: p2, filename: 'war3.png')
  chip6.save!

  chip7 = businesses[18]
  p3 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/war2.png')
  chip7.photos.attach(io: p3, filename: 'war2.png')
  chip7.save!

  chip8 = businesses[18]
  p4 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/war.png')
  chip8.photos.attach(io: p4, filename: 'war.png')
  chip8.save!


  wn1 = businesses[19]
  wnp1 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/wn1.png')
  wn1.photos.attach(io: wnp1, filename: 'wn1.png')
  wn1.save!


  wn2 = businesses[19]
  wnp2 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/wn2.png')
  wn2.photos.attach(io: wnp2, filename: 'wn2.png')
  wn2.save!


  wn3 = businesses[19]
  wnp3 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/wn3.png')
  wn3.photos.attach(io: wnp3, filename: 'wn3.png')
  wn3.save!


  wn4 = businesses[19]
  wnp4 = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/wn4.png')
  wn4.photos.attach(io: wnp4, filename: 'wn4.png')
  wn4.save!







  Review.create!([
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[0].id, rating: 4, body: 'My friend got a vanilla drink from there I cant recall the name of but it was fabulous.' },
    {cool: 1, funny: 1, useful: 1, like: 1, user_id: users[2].id, business_id: businesses[0].id, rating: 5, body: "They also have WiFi so I always see a lot people working or studying there. But it's a small cafe so it's usually packed." },
    {cool: 3, funny: 1, useful: 2, like: 0, user_id: users[2].id, business_id: businesses[0].id, rating: 5, body: "My go to coffee shop in Brooklyn! Check it out." },
    {cool: 2, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[0].id, rating: 4, body: "The service is pretty quick and efficient, and the staff members are so friendly! If I lived in the area, this would be a place I'd frequent." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[0].id, rating: 4, body: "Great espresso. Keep in mind that a regular espresso here is a double size!" },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[0].id, rating: 3, body: "We were here at about 6pm and there weren't many choices for desserts left. We got a latte, a matcha and a toasted coconut donut." },
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[1].id, rating: 5, body: "You certainly are expected to work as much as you everyday. Everyone is incredibly smart and motivated; I went to a top school in the United States, but found my peers here to be heads and tails above my university peers." },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[1].id, rating: 5, body: "I had absolutely NO computer science background before attending, and ended up getting a job within the first month following the program, so this program DEFINITELY fulfills its promises." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[1].id, rating: 5, body: "I was a part of the NYC March cohort (Mar - Jun 2018) and purposely waited to write my review until I accepted a job after completing the program." },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[1].id, rating: 5, body: "If you are someone who wants to change the direction of your life or want to get into programming for whatever reason, AND above all else is willing to put in the hours to do it, do not hesitate and go for it. You won't regret it" },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[1].id, rating: 5, body: "Give the program 100% and you will become a great developer. There are developer jobs in every country you would want to live in, it's a great skill to have." },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[1].id, rating: 5, body: "You will crush interviews - every company I visited was thorougly impressed with my abilities. Many grads go to very recognizable companies!" },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[1].id, rating: 5, body: "App Academy is life changing. Your time there will be brutal but when you receive your first offer, you'll know immediately that it was all worth it." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[2].id, rating: 2, body: "I've gone there off and off over the last few years and while the coffee and food is quite nice, they hire some pretty rude people. The woman that took my order looked at me like our families have been rivals for centuries." },
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[2].id, rating: 4, body: "Cool clean and modern coffee shop featuring a wide selection of coffees, teas and even beers. Service is friendly and quick and the matcha latte was excellent and very potent." },
    {cool: 2, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[2].id, rating: 3, body: 'My go to spot to study and chat with friends over some coffee. Love the atmopshere and such a clean and tidy place.' },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[2].id, rating: 4, body: 'Cold brew tasted like a super dark roast without any sweet or fruity subtle notes.  Kinda harsh like starbucks. The coffee only tasted drinkable with some half and half.' },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[2].id, rating: 1, body: "I was supremely disappointed and will not be visiting again." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[2].id, rating: 4, body: "Good place to study paired with good coffee! I love finding ample study space and outlets in New York coffee shops because its not easy to come by! " },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[3].id, rating: 5, body: "My mouth is watering thinking about the lemon butter sauce... Okay so, it's not the most amazing lobster, but it's still good. The sauce is what always gets me. Get it! And also the fries... I just love fries." },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[3].id, rating: 4, body: "Their lobster roll actually had more flavor than my whole lobster, which is fine I'll just get it next time. I'd recommend trying this place out if you're hungry!" },
    {cool: 2, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[3].id, rating: 5, body: "Best lobster roll I've ever had (I'm from Florida, so a decent lobster roll is hard to come by). Love how the bread hold everything in to reduce mess. Would 10/10 recommend." },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[3].id, rating: 1, body: "I'm not sure I'm understanding where the hype is coming from. The food was decent, but nothing to rave about, and certainly not enough to have me return here." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[3].id, rating: 4, body: "Good vibes, good customer service, good food!!! It is a bit pricey, but hey, what can you expect from a good lobster roll place??"},
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[3].id, rating: 4, body: "I got the original lobster roll and the samurai. Both around $20~25, but it comes with a side of fries and salad. Recommend if you're bougie$$" },
    {cool: 6, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[4].id, rating: 5, body: "By far, my favorite go-to cafe in Flushing to be ultra-productive. It has consistently been the place I've gotten all my work done for my job/school over the past few years and also a great spot to catch up with friends." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[4].id, rating: 4, body: "Coffee prices are decent (around $3-5, depending on what you get) and the Americanos and lattes are well-balanced in flavour--no complaints in my book." },
    {cool: 7, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[4].id, rating: 4, body: "We came here for a quick latte/coffee and it was a great spot to relax, unwind, and even sit and do some work while you enjoyed a drink." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[4].id, rating: 3, body: "Wish I had something better to say, but I tried the coffee and tea: both were okay. The tiramisu was not good, I have made better with my amateur baking skills." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[4].id, rating: 5, body: "One of the best cafes along the long streets of Northern Boulevard here. We had the honey bread with matcha ice cream on top and it was amazing. The honey bread was nice and crispy on the outside and soft and doughy on the inside. Matcha ice cream looks really dark, but it's not bitter." },
    {cool: 8, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[4].id, rating: 4, body: "Their coffees here are usually always solid here. My friend ordered the cortada and loved it. It's a nice cafe to chill, unwind and get some work done." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[4].id, rating: 4, body: "I always come here occasionally when I'm around the area. When I do come, I always get the Rose temptation iced tea. If you're trying to avoid coffee, this is a wonderful alternative!" },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[5].id, rating: 4, body: "Later I called them to book appointment and everything went well smoothly. They had done an incredible job, carpet now looks fresh and new." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[5].id, rating: 4, body: "Carpet Cleaning NYC Pros are reliable and very experienced. I would recommend!" },
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[5].id, rating: 5, body: " NYC Pros came through for us big time.  Got us a fair price right away and was able to get the work done to meet my schedule.  Thank for all the help!" },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[5].id, rating: 4, body: "After a week of babysitting my nephews, along with cat sitting my brother two cats. My carpet was in desperate need of cleaning. I scheduled a cleaner and they show up right on time." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[5].id, rating: 4, body: "They did a amazing impeccable job on my carpet, it looks brand new again!! Professional and friendly, with affordable prices. It was top notch service all around." },
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[5].id, rating: 4, body: "Thank you so much Carpet Cleaning! I really could not be happier with the result! My living room carpet looks amazing! After years of wearing out outdoor shoes all over it, my carpet went from beige to grey dark spots all over. " },
    {cool: 2, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[6].id, rating: 1, body: "Don't be fooled by the the average star ratings like me, read reviews before you go! I was shock by how stingy the portion they gave, even the brown rice and beans! Not to mention the chicken! Unbelievable. By far the most stingy location I've ever been." },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[6].id, rating: 1, body: "They broke the record. I had a chicken bowl, I felt I got a veggie bowl. I can count the pieces of chicken and to make it worse, they didn't even taste good. Dry and chewy. The people behind the bar were not friendly at all. They had no clue what customer service was. This was my first and last time here." },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[6].id, rating: 3, body: "I have been waiting for years to eat here. Left vastly disappointed. The food was ok at best. The servers service was awful. I make question and they weren't responsive . For me this was subway with a texmex vari" },
    {cool: 7, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[6].id, rating: 1, body: "This is the worst chipotle I have ever been to and I am a certified chipotle addict! I work near by and have been here several times but I am completely done with this location for good! The portions they give you are disgustingly unacceptable!" },
    {cool: 10, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[6].id, rating: 4, body: "Ever since working nearby at a salad place, I go to this chipotle store location almost everyday. The environment is pleasant , the food tastes great and the employees are very helpful. In particular, the pretty girl with the curly hair always keeps a smile on my face " },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[7].id, rating: 4, body: "Good place to work. Limited space (comfortably fits 10 people.) Outside bench available. Classy baristas. Unique decorations (ie. upside down chemistry lab beaker used as coffee drip.)"},
    {cool: 15, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[7].id, rating: 2, body: " My friend and I were really really disappointed with the coffee. The cold brew was watered down. I told them I love  strong black coffee and they recommended Costa Rica coffee. I was so excited and can't wait to try it." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[7].id, rating: 2, body: "The only good was the deconstructed latte, it was unique and cute for Instagram. I don't really like latte but it's pretty good. It comes with a shot of espresso and I enjoyed that. I should have just order the espresso." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[7].id, rating: 4, body: "The deconstructed latte was a shot of espresso and some milk followed by the actual latte. The espresso by itself was very strong and a bit sour. The complete latte was smooth and comforting. It was the perfect spot to catch up with a friend!" },
    {cool: 12, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[7].id, rating: 5, body: "I pass this coffee shop most days on my commute. After my first visit here today, I may just have to start waking up 5 minutes earlier to add it to my weekday routine. (And budgeting an extra $5 a day into my currently modest coffee expenses.)"},
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[8].id, rating: 4, body: "Good vibes, nice people and an excellent staff that master code. Don't even over think it. Do it." },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[8].id, rating: 4, body: "The young instructors were very energetic and encouraging and able to communicate their enthusiasm for coding to their students, some of whom came with some knowledge of the subject, and others with none at all. " },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[8].id, rating: 3, body: "The pace was too slow. Felt as if I could have learned most of the cirriculum by myself at home. Still learned alot but expected much more. " },
    {cool: 6, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[8].id, rating: 4, body: "I spent six weeks interviewing which involved technical questions. I was asked to explain the internet, write the reverse method for a string without using .reverse on a whiteboard, construct a multiplayer chess game with thousands of users and describe the caching involved" },
    {cool: 5, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[8].id, rating: 4, body: "The instructor I had for my iOS development class was very professional, knowledgeable and dedicated. She is a true master of her craft but on top of that she is an excellent teacher which is a rare combination." },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[8].id, rating: 1, body: "I recently withdrew early from the immersive program.  I have never been more disappointed with an experience at a school, which is why I felt compelled to write this, even after receiving a full refund. " },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[8].id, rating: 3, body: "Avoid this place at all costs. The course I took here was terrible. Unprofessional, badly taught, unclear, and often beset with many technical problems such as projectors not working, etc. Homework was practically non-existent, even though it was supposed to be weekly. "},
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[9].id, rating: 4, body: "The young instructors were very energetic and encouraging and able to communicate their enthusiasm for coding to their students, some of whom came with some knowledge of the subject, and others with none at all. " },
    {cool: 6, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[9].id, rating: 4, body: "It's the best decision and a risk I've ever made and for people who are looking into it, fear not, listen to your heart or at least, for now, listen to me and just be part of Fullstack. you won't regret it."},
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[9].id, rating: 4, body: "Everyone's diverse and comes from a different background and zero bias so you can not only focus on just learning but also on making good friends during your time there.  "},
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[9].id, rating: 5, body: "I am happy I made it and so will you. And I am thankful to everyone at Fullstack who put so much time and effort into this school. It truly is a  special place.  Thanks to David and Nimit for providing this educational platform for growth. "},
    {cool: 12, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[9].id, rating: 4, body: "Attending Fullstack Academy was the greatest decision of my life. But it's true. After many years of professional acting and part-time jobs in New York, I wanted to change careers and pursue a new direction in life, and I couldn't be happier with the results."},
    {cool: 13, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[10].id, rating: 4, body: "What can I say about  JC landscaping !  I can say one thing Simply The BEST !!!  Joe has the Knowledge and most of all he is Hands On ! One of the Hardest working landscapers out there ." },
    {cool: 7, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[10].id, rating: 2, body: "They called back saying they don't service middle Village yet on their website it specifies that, we saw them working on my neighbors block. Not to mention on their Facebook they posted videos of their Recent work done in middle village." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[10].id, rating: 4, body: " Great job by JC! Scary overgrown backyard  - with the right manpower it was cleaned up quickly with and with expertise. They Replaced the lighting (which couldn't even be seen anymore!) trimmed back the neighbor's trees and got rid of all the annoying weeds inbetween the pavers." },
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[10].id, rating: 4, body: "Joe was great at communicating via text all along the way and sending pictures which I really appreciated since we were at work. We loved his enthusiasm about our project and knew he was putting great thought and care into all that was done. " },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[10].id, rating: 5, body: "Service is great! Their designs are awesome and look amazing every time on every job.  Joe has beautified 80% of my neighborhood and we all use his maintenance services as well. He's well known,  friendly, helpful and resourceful. "},
    {cool: 10, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[10].id, rating: 5, body: "Don't think I would ever use any other landscaping service besides JC. Even when he's busy...he's worth the wait and will make it up to you somehow.  Thanks for all your great work Joe!!"},
    {cool: 10, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[11].id, rating: 4, body: " Great dumplings.  6 per container.  We had the crab and pork.  Very juicy since they are soup based." },
    {cool: 11, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[11].id, rating: 4, body: "The General Tso's chicken was excellent with a good amount of sauce. Chow lo mein noodles were very good with smokey flavor and beef with asparagus had excellent meat.  I would return.  " },
    {cool: 12, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[11].id, rating: 3, body: "Maybe the dumplings are the way to go here. The other reviewers rave about them but I didn't try it because of the pork. What I did have was average Chinese food, to quote my friend The orange chicken was only a little better than Panda Express."},
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[11].id, rating: 3, body: "Service was very slow, but the soup dumplings really were excellent."},
    {cool: 2, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[11].id, rating: 1, body: "I've had the Joe's Shanghai in Chinatown many times with no complaints. My first time at this location, and it is definitely THE LAST." },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[11].id, rating: 2, body: "Mediocre, overpriced Chinese food. Came here for lunch on a weekday and was seated immediately with no wait - somewhat of a bad sign during the midtown lunch rush." },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[12].id, rating: 4, body: "We ordered the small margherita pizza with half pepperoni on it, and it was delicious. The crust wasn't too thin but not super thick. Everything was perfectly cooked. Not greasy. Great size for us 3 girls - about 2.5 slices each. " },
    {cool: 5, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[12].id, rating: 3, body: "They do not seat you unless every in your party is ready. Nor do that take reservations. We got lucky and sat immediately around lunch time and we had a large group 6 people." },
    {cool: 6, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[12].id, rating: 5, body: "I am Italian and I mean I'm actually from there, born and raised in the north west side of it. Living the States since 07. Let me tell you.....This PIZZA is as close as it gets to the Italian one." },
    {cool: 7, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[12].id, rating: 4, body: "Usually there is a huge line here and that's pretty obvious from the queue marker outside the restaurant. The servers are very aware that the tables are uneven and make sure there is support underneath constantly so the tables don't wobble. " },
    {cool: 8, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[12].id, rating: 5, body: "Probably the best spaghetti with meatballs I've ever had. Their pizza is also very good, it's not the best I've ever had but it's up there. I like that they serve Mexican coke in a glass since it makes everything taste better. This is my second time coming here and it both times it was great." },
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[12].id, rating: 4, body: "We ordered two different pies, one a white pizza with pancetta and the other a tomato sauce with sausage. Both were excellent! Definitely what I would recommend if you're after a NY style slice! Would come back again for sure!" },
    {cool: 10, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[13].id, rating: 4, body: "MaidStay is a great service! Easy to book and very flexible. They do great work. My move out service was done exceptionally well and they completed the whole job with a smile!" },
    {cool: 11, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[13].id, rating: 2, body: " quality of cleaning is poor compared to other cleaning service I had use. I booked a move out cleaning and after they are done, the floor is still quite filthy. Fridge cleaning is also sloppy. One of my remote is also lost after the cleaning."},
    {cool: 12, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[13].id, rating: 4, body: "The ladies were very thorough and friendly. They did a great job and we'd definitely use the service again." },
    {cool: 13, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[13].id, rating: 4, body: "Great service and results! My house looked very clean ! Thank you. I would love to be able to get this service every week!" },
    {cool: 12, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[14].id, rating: 4, body: "Roman was excellent, the office staff is very efficient. Super easy to work with and the quality of the work is great. I'd recommend them to anyone!" },
    {cool: 11, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[14].id, rating: 4, body: "Excellent service. I sent them a message, and they came over very quickly to help me gain access to my apartment after a key was lost. They removed the cylinder to my door lock, leaving everything else in tact, and did this all very quickly." },
    {cool: 10, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[14].id, rating: 5, body: "They're great! Wonderful customer service that took care of me quickly. I needed a security system installed for my new office and they were able to recommend me a great system. " },
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[14].id, rating: 4, body: "The Install was quick and easy. All around affordable. It doesn't get much better than this!" },
    {cool: 8, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[15].id, rating: 4, body: "I am particularly grateful to Manny for being patient with me and my many questions. I do not have a green thumb and appreciate having someone who can give me guidance on lawn and plant maintenance." },
    {cool: 7, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[15].id, rating: 5, body: "They ripped out the weeds and sodded the backyard.  The lawn looked great. Since then, they have been maintain the yard.  Each year, the yard looks better than the previous." },
    {cool: 6, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[15].id, rating: 4, body: "he clean up was as high quality as the work done on my yard. I would highly recommend Right Lawn Care and would gladly use them again.  Also a five star rating to Mannys wife for the delicious West Indian noodles!" },
    {cool: 5, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[15].id, rating: 5, body: "Right Lawn Care is great company. They did an excellent job in my yard. It was looking like the Amazon on steroids. The owner of the company was very professional." },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[15].id, rating: 4, body: "I have used this service twice now. They are awesome. They do a fantastic job on both our front and back yards. The result is like night and day. I was actually hesitant to write a review because they are very busy and I want to keep them to myself. " },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[16].id, rating: 4, body: "We timed it just right and got in no problem. One of the workers noticed one in our group wasn't drinking her shake, so she changed it out, unsolicited, for one she liked much better." },
    {cool: 2, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[16].id, rating: 4, body: "The line was quick when I got there and there was plenty of seating -it was midweek a bit after lunch time. A lot of tourists anytime of the week/day!" },
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[16].id, rating: 5, body: "It is pretty tight in there during the lunch rush with no real place to sit, but if a seat becomes available your golden! The burger meat is juicy and delicious, the bread is soft and the fries were the best! Pretty sure I'm coming back" },
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[16].id, rating: 3, body: "Before I ordered I didn't ask what they were going to do about a bun-less burger I just went with the flow. They wrapped my burger with lettuce. I also ordered a glass of wine which was good. It's probably the only fast food burger I'll ever eat." },
    {cool: 2, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[17].id, rating: 4, body: "The coaches are incredibly thoughtful and caring, and will motivate you while watching your form.  The other members and guests are also equally wonderful to work out with side by wide and so inspiring.  " },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[17].id, rating: 5, body: "Everyone was extremely talented and could make a balloon animal have mythical powers of fitness and nutritional choices. all sorts of levels from beginners to super athletes using suggestions from the adults to pre-choose the drawing of humor. " },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[17].id, rating: 4, body: "The coaches are incredibly thoughtful and caring, and will motivate you while watching your form.  The other members and guests are also equally wonderful to work out with side by wide and so inspiring.  " },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[17].id, rating: 4, body: "I am absolutely hooked!  I've taken a few of the strength classes here already and each instructor has been great but also add their own method and personality to each class.  " },
    {cool: 5, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[17].id, rating: 4, body: "Update:  I am also completely addicted to Cris's MetCon lunchtime classes.  He is one of the best trainers I've ever had - offers excellent explanations and constant support throughout a session." },
    {cool: 6, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[17].id, rating: 4, body: "This class isn't for the faint of heart, but it's worth a try for everyone if you want to test your limits. I'd like to try some more classes and witness the progression." },
    {cool: 7, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[18].id, rating: 4, body: "LOVE this place! I came for the first time about 3 weeks ago and was immediately hooked, now I can't go a few days without signing up for a class. Luckily I live right around the corner so no complaints there!" },
    {cool: 8, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[18].id, rating: 5, body: "This is hands down the best workout in the city. I love working out and I like all kinds of fitness classes but this is truly the best way to spend an hour. Classes have everything - cardio, strength, bodyweight exercises, HIIT, arms, legs, butt, abs, and just enough stretching. " },
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[18].id, rating: 4, body: "The workout gets results on whatever you are looking to find. Strength, weight loss, state of mind, sense of accomplishment, and just feeling good." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[18].id, rating: 5, body: "If I could give 10 stars I would. Alex always creates a unique workout - cardio, weights, individual work or having a partner. I've been ~20 times, and it's different every time." },
    {cool: 0, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[18].id, rating: 5, body: "Best place to get you stronger physically and also mentally. That's how Marine does for and you will get to experience it. " },
    {cool: 6, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[19].id, rating: 1, body: "The ice cream was expensive and only one size was available. It was icy and watery soft serve. Last time I'll be trying that item here." },
    {cool: 5, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[19].id, rating: 4, body: "This is no longer a cafe in my eyes. This place is a sanctuary for anyone looking for a laugh and a friend. The baristas here are incredible artists and moreso genuinely great human beings. " },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[19].id, rating: 5, body: "I left with more than just a satisfying cup of caffeine (which was the best ADD SHOT latte and matcha latte I've ever had in my life); I left with a nickname and a family. " },
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[19].id, rating: 4, body: "I tried the matcha latte and loved  it - the matcha was freshly whisked and the latte tasted wonderfully smooth and sweet. Next time I'll have to try other coffee and food options; everyone else's looked great!" },
    {cool: 8, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[10].id, rating: 4, body: "What can I say about  JC landscaping !  I can say one thing Simply The BEST !!!  Joe has the Knowledge and most of all he is Hands On ! One of the Hardest working landscapers out there ." },
    {cool: 8, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[19].id, rating: 4, body: "Awesome place. I love the vibe and the coffee. Their donuts (I forgot where they get them from) and their soft serve are gems!" },
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[14].id, rating: 5, body: "They were great to deal with! Orbit sets the standard for being a highly competent, honest locksmith at a fair price. Don't hesitate. Call them if you need a locksmith!" },
    {cool: 10, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[7].id, rating: 4, body: "Nitro flights were lovely, light and balanced. Definitely super light mouth feels and the white nitro had a nice creaminess to it. Good spot! Wished coffee shops in Chicago did this type of thing more." },
    {cool: 11, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[6].id, rating: 4, body: "Super great service and close to Wall Street. This is about what you should expect from a chipotle. Clean, fast, affordable, and delicious!" },
    {cool: 1, funny: 0, useful: 0, like: 0, user_id: users[0].id, business_id: businesses[16].id, rating: 4, body: "It's honestly a toss-up between Chick-Fil-A and Shake Shack for best fast food in Manhattan but this Shake Shack location gets a bonus star because of its stellar location beside the Brooklyn Bridge. " },
    {cool: 3, funny: 0, useful: 0, like: 0, user_id: users[3].id, business_id: businesses[13].id, rating: 5, body: "We scheduled an office cleaning over the weekend and really only expected a superficial cleaning and some mopping as we are an early stage startup and don't make much of a mess. They cleaned the hell out of our place an organized everything" },
    {cool: 4, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[5].id, rating: 4, body: "Carpet Cleaning NYC Pros are reliable and very experienced. I would recommend!" },
    {cool: 5, funny: 0, useful: 0, like: 0, user_id: users[2].id, business_id: businesses[0].id, rating: 4, body: 'My friend got a vanilla drink from there I cant recall the name of but it was fabulous.' },
    {cool: 9, funny: 0, useful: 0, like: 0, user_id: users[1].id, business_id: businesses[18].id, rating: 4, body: "LOVE this place! I came for the first time about 3 weeks ago and was immediately hooked, now I can't go a few days without signing up for a class. Luckily I live right around the corner so no complaints there!" },
    ])

    reviews = Review.all
##seed
##prod bucket
##json builder
  #
  # Photo.create!([
  #   {business_id: businesses[0].id, image_url: 'assets/chip1.jpg'},
  #   {business_id: businesses[0].id, image_url: 'assets/chip2.jpg'},
  #   {business_id: businesses[0].id, image_url: 'assets/chip3.jpg'},
  #   {business_id: businesses[0].id, image_url: 'assets/chip4.jpg'},
  #   {business_id: businesses[1].id, image_url: 'assets/shake1.jpg'},
  #   {business_id: businesses[1].id, image_url: 'assets/shake2.jpg'},
  #   {business_id: businesses[1].id, image_url: 'assets/shake3.jpg'},
  #   {business_id: businesses[1].id, image_url: 'assets/shake4.jpg'},
  #   {business_id: businesses[2].id, image_url: 'assets/jc1.jpg'},
  #   {business_id: businesses[2].id, image_url: 'assets/jc2.jpg'},
  #   {business_id: businesses[2].id, image_url: 'assets/jc3.jpg'},
  #   {business_id: businesses[2].id, image_url: 'assets/jc4.jpg'},
  #   {business_id: businesses[3].id, image_url: 'assets/bb1.jpg'},
  #   {business_id: businesses[3].id, image_url: 'assets/bb2.jpg'},
  #   {business_id: businesses[3].id, image_url: 'assets/bb3.jpg'},
  #   {business_id: businesses[3].id, image_url: 'assets/bb4.jpg'},
  #   {business_id: businesses[4].id, image_url: 'assets/aa1.jpg'},
  #   {business_id: businesses[4].id, image_url: 'assets/aa2.jpg'},
  #   {business_id: businesses[4].id, image_url: 'assets/aa3.jpg'},
  #   {business_id: businesses[4].id, image_url: 'assets/aa4.jpg'}
  #   ])
