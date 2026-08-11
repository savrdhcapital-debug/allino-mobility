export type Vehicle={id:string;slug:string;name:string;category:"Car"|"Bike";image:string;pricePerDay:number;fuel:string;transmission:string;seats:string;rating:number;availability:string;features:string[];description:string};

// Use stable direct image URLs. The previous values pointed to webpage URLs, so several cards rendered broken images.
const VEHICLE_IMAGES={
  alto:"https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Alto%20K10.jpg",
  wagonr:"https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Wagon%20R.jpg",
  dzire:"https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Dzire%20VXi%20VVT.JPG",
  activa:"https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Activa%206G.jpg",
  access:"https://commons.wikimedia.org/wiki/Special:FilePath/Suzuki%20access%20125.jpg",
  jupiter:"https://commons.wikimedia.org/wiki/Special:FilePath/TVS%20Jupiter.jpg"
};

export const vehicles:Vehicle[]=[
{id:"alto",slug:"alto-cng",name:"Alto CNG",category:"Car",image:VEHICLE_IMAGES.alto,pricePerDay:1800,fuel:"CNG",transmission:"Manual",seats:"4 Seats",rating:4.8,availability:"Available",features:["Unlimited KMs","CNG included","Insurance","24/7 Support"],description:"A practical, efficient city car for everyday Bhopal travel."},
{id:"wagonr",slug:"wagonr-cng",name:"WagonR CNG",category:"Car",image:VEHICLE_IMAGES.wagonr,pricePerDay:2000,fuel:"CNG",transmission:"Manual",seats:"5 Seats",rating:4.8,availability:"Available",features:["Unlimited KMs","CNG included","Insurance","24/7 Support"],description:"Spacious and comfortable for family trips and city drives."},
{id:"dzire",slug:"dzire-cng",name:"Dzire CNG",category:"Car",image:VEHICLE_IMAGES.dzire,pricePerDay:2200,fuel:"CNG",transmission:"Manual",seats:"4 Seats",rating:4.8,availability:"Available",features:["Unlimited KMs","CNG included","Insurance","24/7 Support"],description:"A refined sedan for comfortable business and leisure journeys."},
{id:"activa",slug:"activa-6g",name:"Activa 6G",category:"Bike",image:VEHICLE_IMAGES.activa,pricePerDay:199,fuel:"Petrol",transmission:"Automatic",seats:"2 Seats",rating:4.8,availability:"Available",features:["Helmet support","Insurance","24/7 Support","Easy pickup"],description:"Easy, reliable scooter mobility for everyday city rides."},
{id:"access",slug:"access-125",name:"Access 125",category:"Bike",image:VEHICLE_IMAGES.access,pricePerDay:219,fuel:"Petrol",transmission:"Automatic",seats:"2 Seats",rating:4.8,availability:"Available",features:["Helmet support","Insurance","24/7 Support","Easy pickup"],description:"Comfortable 125cc scooter for longer city rides."},
{id:"jupiter",slug:"jupiter-125",name:"Jupiter 125",category:"Bike",image:VEHICLE_IMAGES.jupiter,pricePerDay:229,fuel:"Petrol",transmission:"Automatic",seats:"2 Seats",rating:4.8,availability:"Available",features:["Helmet support","Insurance","24/7 Support","Easy pickup"],description:"Smooth and practical scooter for Bhopal commuting."}
];
