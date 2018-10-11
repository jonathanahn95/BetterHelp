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
  phone_number: '(212) 302-0650', website: 'https://www.chipotle.com/', city: "New York", state: "NY", zip_code: 10018, business_category_id: business_categories[0].id, latitude: 44.915495, longitude: -80.303601},
  {name: 'Shake Shack', address: "1 Old Fulton St", hours: ["9:45 am - 9:00 pm" ,"	9:45 am - 9:00 pm ",	"9:45 am - 9:00 pm"	,"9:45 am - 9:00 pm" ,"9:45 am - 9:00 pm" ,	"9:45 am - 9:00 pm" ,	"9:45 am - 9:00 pm"],
  phone_number: '(347) 435-2676', website: 'https://www.shake-shack.com/', city: "Brooklyn", state: "NY", zip_code: 11201, business_category_id: business_categories[0].id, latitude: 50.451231, longitude: -60.632209 },
  {name: 'JC Landscaping and Design', address: "68-19 Woodhaven Blvd", hours: ["9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"	,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm" ,	"9:00 am - 5:00 pm"],
  phone_number: '(718) 672-7323', website: 'https://www.jcdesignscapes.com.com/', city: "Queens", state: "NY", zip_code: 11374, business_category_id: business_categories[1].id ,latitude: 99.012213, longitude: -40.239881 },
  {name: 'Bean and Bean', address: "318 8th Ave", hours: ["9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"	,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm" ,	"9:45 am - 10:30 pm"],
  phone_number: '(646) 869-2070', website: 'https://beannbean.com.com/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[2].id, latitude: 105.321333, longitude: -77.271123 },
  {name: 'App Academy', address: "159 W 25th St", hours: ["9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"	,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm" ,	"9:00 - 5:00 pm"],
  phone_number: '(123) 718-3213', website: 'https://www.appacademy.io/', city: "Manhattan", state: "NY", zip_code: 10001, business_category_id: business_categories[3].id ,latitude: 67.672337, longitude: -34.265121 }
  ])

  businesses = Business.all
  chip1 = businesses[0]
  file = EzDownload.open('https://s3.amazonaws.com/betterhelp-dev/chip1.jpg')
  chip1.photos.attach(io: file, filename: 'chip1.jpg')
  chip1.save!

  chip2 = businesses[0]
  file1 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/chip2.jpg")
  chip2.photos.attach(io: file1, filename: 'chip2.jpg')
  chip2.save!

  chip3 = businesses[0]
  file2 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/chip3.jpg")
  chip3.photos.attach(io: file2, filename: 'chip3.jpg')
  chip3.save!

  chip4 = businesses[0]
  file3 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/chip4.jpg")
  chip4.photos.attach(io: file3, filename: 'chip4.jpg')
  chip4.save!

  ss1 = businesses[1]
  file4 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake1.jpg")
  ss1.photos.attach(io: file4, filename: 'shake1.jpg')
  ss1.save!

  ss2 = businesses[1]
  file5 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake2.jpg")
  ss2.photos.attach(io: file5, filename: 'shake2.jpg')
  ss2.save!

  ss3 = businesses[1]
  file6 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake3.jpg")
  ss3.photos.attach(io: file6, filename: 'shake3.jpg')
  ss3.save!

  ss4 = businesses[1]
  file7 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/shake4.jpg")
  ss4.photos.attach(io: file7, filename: 'shake4.jpg')
  ss4.save!


  jc1 = businesses[2]
  file8 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc1.jpg")
  jc1.photos.attach(io: file8, filename: 'jc1.jpg')
  jc1.save!


  jc2 = businesses[2]
  file9 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc2.jpg")
  jc2.photos.attach(io: file9, filename: 'jc2.jpg')
  jc2.save!


  jc3 = businesses[2]
  file10 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc3.jpg")
  jc3.photos.attach(io: file10, filename: 'jc3.jpg')
  jc3.save!


  jc4 = businesses[2]
  file11 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/jc4.jpg")
  jc4.photos.attach(io: file11, filename: 'jc4.jpg')
  jc4.save!

  bb1 = businesses[3]
  file12 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb1.jpg")
  bb1.photos.attach(io: file12, filename: 'bb1.jpg')
  bb1.save!

  bb2 = businesses[3]
  file13 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb2.jpg")
  bb2.photos.attach(io: file13, filename: 'bb2.jpg')
  bb2.save!

  bb3 = businesses[3]
  file14 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb3.jpg")
  bb3.photos.attach(io: file14, filename: 'bb3.jpg')
  bb3.save!

  bb4 = businesses[3]
  file15 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/bb4.jpg")
  bb4.photos.attach(io: file15, filename: 'bb4.jpg')
  bb4.save!

  aa1 = businesses[4]
  file16 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/appa.jpg")
  aa1.photos.attach(io: file16, filename: 'app-academy.jpg')
  aa1.save!


  aa2 = businesses[4]
  file17 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/aa2.jpg")
  aa2.photos.attach(io: file17, filename: 'aa2.jpg')
  aa2.save!


  aa3 = businesses[4]
  file18 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/aa3.jpg")
  aa3.photos.attach(io: file18, filename: 'aa3.jpg')
  aa3.save!


  aa4 = businesses[4]
  file19 = EzDownload.open("https://s3.amazonaws.com/betterhelp-dev/aa4.jpg")
  aa4.photos.attach(io: file19, filename: 'aa4.jpg')
  aa4.save!





  Review.create!([
    {user_id: users[0].id, business_id: businesses[0].id, rating: 4, body: 'I love this place and I would def come back here. Customer service was great and I was able to enjoy my meal in peace. Definetly going to come back.' },
    {user_id: users[0].id, business_id: businesses[1].id, rating: 2, body: 'Took forever to get my food and everyone there had an attitude. Probably will not come back to this location for a very long time' },
    {user_id: users[1].id, business_id: businesses[1].id, rating: 5, body: 'Who doesnt love Shake Shack! Burgers and fries all dayyyyyy' },
    {user_id: users[2].id, business_id: businesses[4].id, rating: 4, body: 'This place has changed me. Instructors are great and environment is great. I learned more than I could ever imagine. Coding for life!' },
    {user_id: users[0].id, business_id: businesses[3].id, rating: 3, body: 'My go to spot to study and chat with friends over some coffee. Love the atmopshere and such a clean and tidy place.' },
    {user_id: users[2].id, business_id: businesses[2].id, rating: 5, body: 'JC for the win!! I love my experience with dealing with them and I would definetly call them back if I ever had any issues. If my friends ever needed help then I would recommended them JC!' },
    {user_id: users[2].id, business_id: businesses[0].id, rating: 5, body: "The food here is kind old. I've eaten at chipotle for 15years. The rice and beans will be super old. The grill here looks dirty. I worked in food and this place needs to be cleaned. The food is never hot when being served here. Even the glass to where you are served was dirty. I do pay attention to details and I was very concerned about this location." },
    {user_id: users[2].id, business_id: businesses[0].id, rating: 5, body: "Well it's chipotle what do you expect. I was pleasantly surprised by the veggie bowl. The burritos are not very good and really messy." },
    {user_id: users[1].id, business_id: businesses[0].id, rating: 2, body: "This location is CLOSED. It is now Koja Kitchen. Just adding some text here so it's long enough for a review. Posting this so others don't waste time trying to find it. I am not sure when it closed." },
    {user_id: users[0].id, business_id: businesses[0].id, rating: 3, body: "Pretty good food, but can somebody teach them how to properly wrap burritos and portion their servings better lol" },
    {user_id: users[0].id, business_id: businesses[0].id, rating: 5, body: "Great Chipotle in the Westfield San Francisco Centre mall. I was staying at the Axiom Hotel across the street (it's literally only like a two minute walk) and needed a quick, easy dinner before I turned in. The staff was friendly and I came about 40 minutes before closing time, so they weren't too packed at all! I was in and out with my to-go bowl. I got my usual: a chicken bowl with pinto beans, brown rice, mild & medium hot sauce, cheese, sour cream, and GUAC (get outta my face literally if you don't worship guac). Got back to my hotel and ate it all up. Definitely recommend if you're staying at a nearby hotel or if you're in the mall!" },
    {user_id: users[2].id, business_id: businesses[0].id, rating: 1, body: "Zero star if i could! This is by far the worst one I've ever visited! Any other locations I've been to give out food much more than this location does! I've been here twice and both times fed with displeasures. This time the woman at the counter just scooped one scoop of rice and then dumped half out!! I asked for a bit more just to meet the standard quantity and I even said I could pay if there was an extra charge and she was very reluctant and unhappy to scoop another little half. Just like the first time a man treated me with scoop-and-dump, probably that's their employees specially trained skill to save food for the company. Anyway I'd never go to this chipotle again!! I may also blacklist this company that takes advantage of customers! so damn disgusting" },
    {user_id: users[1].id, business_id: businesses[0].id, rating: 3, body: "Good option at the Westfield mall. The main food court looks good but the food is not that great and this serves as a good alternative. Can't go wrong with the chicken bowl with guac." },
    {user_id: users[0].id, business_id: businesses[0].id, rating: 1, body: "The food here is kind old. I've eaten at chipotle for 15years. The rice and beans will be super old. The grill here looks dirty. I worked in food and this place needs to be cleaned. The food is never hot when being served here. Even the glass to where you are served was dirty. I do pay attention to details and I was very concerned about this location." },
    {user_id: users[2].id, business_id: businesses[0].id, rating: 1, body: "Please be attention in this chipotle... Becouse I ordered from Doordash a burrito when I eat after the chicken was sucks and food chicken it was hard to eat becouse they are always bad then I got sick please if you love you life and don't want be sick plz don't go there is they change the food. I wanna the healthy food not the sucks food. Plz is any body working to contra costa plz go there and check the food to get before anyone sick Thanks" },
    {user_id: users[1].id, business_id: businesses[0].id, rating: 2, body: "During lunch time this location is packed. So order ahead or be prepared to wait. Also seating is limited and due to the crowd it's hard to sit and enjoy your meal. I ordered a salad. There isn't much to say about the taste and flavor. It is exactly what is expected of chipotle. The guy was slightly stingy with the lettuce but otherwise he salad was crisp and tasty. I also got a small chips and queso which I believe is slightly overpriced. But isn't everything at Chipotle overpriced. How about the $1.90 they charge to add guacamole to your food. They could easily raise the price of their items by say $1 and you can get it if you choose." },
    {user_id: users[3].id, business_id: businesses[0].id, rating: 2, body: "I was craving a bowl today and because I was feeling adventurous I switched things up a bit.  Let me just say, I don't have anything bad to say about the bowl whatsoever, it was DELICIOUS!! For some reason though, anytime I get a bag of chips they are DISGUSTING!!! This time around, not only were they stale but some were wet and super soggy.  Maybe don't make so many bag of chips and get rid of them after maybe 2 days or so.  Customers don't pay extra for stale and soggy chips!" },
    {user_id: users[1].id, business_id: businesses[1].id, rating: 5, body: "I was hesitant at first coming here as it's new to the neighborhood and haven't had great experiences with some of the other places around here.... boy was I wrong!  I got the 1/2 Shack burger and tried some of the crispy chicken sandwich and was blown away.  The burger was cooked just how I asked (med rare) which I feel like most places aren't really great at, and very juicy.  The chicken sandwich was very tasty and had homemade slaw on it.  On top of that, they have draft beer and a full bar, very clean place and very friendly staff!" },
    {user_id: users[1].id, business_id: businesses[1].id, rating: 5, body: "I was on vacation in Sf and was craving a juicy burger so I jumped on yelped. I saw the pictures and said let's go check it out. Parking in sf is a drag,  I parked in a spot I thought I could park but was told I couldn't by the owner. He than saw someone leave from a previous spot and told me to go there. (Thanks for being helpful! Very much appreciated) Anywho the cashier that attended us was nice and had a bright smile as she took my order. I got two shack burgers with curly and the other with French fries. They were delicious and made fresh! The presentation was good. The building itself was nice. They have a full bar to btw! Really recommend for anyone to stop in and enjoy a good burger!" },
    {user_id: users[1].id, business_id: businesses[1].id, rating: 5, body: "Shack Burger + Beer = . Y'all, they have a full bar with really good beer on tap. I highly recommend the Shack Burger with Cheddar, Bacon, Lettuce, Tomato, Onion and Pickles - don't you judge me. Amazing!!!!!!" },
    {user_id: users[2].id, business_id: businesses[1].id, rating: 5, body: "Evening flight from New Jersey to San Francisco's Burger Shack exceeded expectations again and again! The burger, the fresh vegetables cut and trimmed properly and the perfectly fresh bun pulls this all together to compliment the Niman's Ranch Beef Burger!! Best consumed immediately." },
    {user_id: users[2].id, business_id: businesses[1].id, rating: 4, body: "Clean. Happy hour from 3-6. Reasonably priced. I had the mushroom Swiss quarter pounder and fries for under $10." },
    {user_id: users[0].id, business_id: businesses[1].id, rating: 5, body: "It seems like a ordinary place but we were tired and cold and we had  a great suprise: fast, tasty and very rewarding. Big Like." },
    {user_id: users[3].id, business_id: businesses[2].id, rating: 5, body: "I found Markus on Yelp, and he did not let me down.  He is a good communicator, and gets the job done in a timely fashion. He also returns texts and calls promptly. We selected wood for a redwood planter box which he created (mine was falling apart and very old) and I picked out the flowers and plants that I wanted from a nursery so that he could plant them all over the garden and throughout the planter box. Markus is a good collaborator and isn't pushy.  He recommended a grade of redwood that was suitable for my needs"},
    {user_id: users[2].id, business_id: businesses[2].id, rating: 1, body: "Stay away from this company. The project looked beautiful at its completion, and the crew were absolutely lovely and respectful. However the newly installed lawn is rapidly dying due to the company's owner's poor recommendation. We spent three months trying to get the attention of Markus before he finally came out to take a look. His assessment? Sometimes lawn dies. You have bad soil. In the meantime, we watched him belittle his hard-working crew. It was appalling behavior." },
    {user_id: users[2].id, business_id: businesses[2].id, rating: 1, body: "We are so disappointed that our investment looks terrible, we were treated terribly, and the only advice the landscaper gave us is to re-hire him to re-install the sod. You've got to be kidding me. We'd hoped to use this company for a remodel of our front yard this fall... needless to say we will be staying far, FAR away from Liaison. Recommend you do, too." },
    {user_id: users[1].id, business_id: businesses[2].id, rating: 5, body: "I would give them 6 stars if I could. From start to finish this team was amazing. From the thoughtful design process to the execution, and constant communication along the way, Liaison were true professionals and a pleasure to work with. We would highly recommend working with Markus, Kalman and the Liaison team for your next landscaping project." },
    {user_id: users[0].id, business_id: businesses[2].id, rating: 5, body: "Markus and his team were fantastic. Markus was super nice, inventive, humble, responsive, extremely reasonable, easy to work with, accommodating and it is clear he takes pride in the final product. He went out of his way on more than one occasion to make us happy and to ensure perfection. His team is highly professional and hard-working. We felt comfortable having them at the house while the work was completed. " },
    {user_id: users[0].id, business_id: businesses[2].id, rating: 5, body: "I hired Liaison Landscapes to help me with the buying and installation of plants and with irrigation. It was an all around great experience to work with Markus and his crew, and I would highly recommend them to others for their landscape needs. Some highlights: 1) To obtain a quote was easy and quick. Liaison came in competitively priced and was available to get started on the project right away. Both of these items are not all that trivial in this busy real estate development market in SF." },
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
