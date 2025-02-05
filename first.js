const fs = require('fs');

const restaurant=[];
const images=["First","second","third","fourth","fifth","sixth","seventh","Eight","nine","tenth"];
const rest_name=["Spice Garden",
  "Tandoori Tales",
  "The Curry House",
  "Flavors of India",
  "Biryani Bistro",
  "Mughal Delight",
  "Saffron Spice",
  "Masala Magic",
  "Golden Thali",
  "Bombay Bites",
  "Taste of Punjab",
  "Royal Rasoi",
  "Chaat Corner",
  "Kebab King",
  "Naan Nirvana",
  "Spicy Sizzle",
  "Indigo Kitchen",
  "Desi Vibes",
  "Tandoor Treat",
  "Curry & Co."]
const foodTypes = [
    "American",
  "Indian",
  "Italian",
  "Mexican",
  "Chinese",
  "Japanese",
  "Thai",
  "French",
  "Greek",
  "Mediterranean"
];
const delhiLocations = [
    "India Gate",
    "Red Fort",
    "Qutub Minar",
    "Lotus Temple",
    "Humayun's Tomb",
    "Akshardham Temple",
    "Jama Masjid",
    "Hauz Khas Village",
    "Lodi Gardens",
    "Purana Qila (Old Fort)"
  ];
  



for(let i=0;i<100;i++){
    const obj={};
    obj["image"]=images[Math.floor(Math.random()*10)];
    obj["name"]= rest_name[Math.floor(Math.random()*20)];
    obj["rating"]= (Math.random()*2+3).toFixed(1);
    obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];
    obj["Price_for_two"]=Math.floor(Math.random()*2001+500);
    obj["location"]=delhiLocations[Math.floor(Math.random()*10)];
    obj["Distance_from_Customer_house"]=(Math.random()*10+1).toFixed(1);
    obj["offers"]=Math.floor(Math.random()*30+5);
    obj["alcholol"]=Math.random()>0.6;
    obj["Restaurant_open_time"]=Math.floor(Math.random()*24);
    obj["Restaurant_close_time"]=(obj["Restaurant_open_time"]+12)%24;

    restaurant.push(obj);
}
const jsonString = JSON.stringify(restaurant, null, 2);

fs.writeFileSync('restaurant.json', jsonString);