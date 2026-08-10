export type Vehicle={id:string;slug:string;name:string;category:"Car"|"Bike";image:string;pricePerDay:number;fuel:string;transmission:string;seats:string;rating:number;availability:string;features:string[];description:string};

// Vehicle imagery is intentionally external/photographic now that the old local SVG/vector assets were removed.
const VEHICLE_IMAGES={
  alto:"https://www.kindpng.com/picc/m/123-1232063_alto-k10-car-png-transparent-png.png",
  wagonr:"https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:243a4fb3-c978-4da0-a7c7-4b0759723656/as/wagonr_Variant-Banner_750x890.jpg?height=890&width=750",
  dzire:"https://www.pngwing.com/en/free-png-vryxy",
  activa:"https://www.pngarts.com/explore/238481",
  access:"https://www.pngkey.com/png/detail/245-2451063_suzuki-new-access-125cc-scooters-suzuki-access-125.png",
  jupiter:"https://www.bikedekho.com/tvs/jupiter-125/images"
};

export const vehicles:Vehicle[]=[
{id:"alto",slug:"alto-cng",name:"Alto CNG",category:"Car",image:VEHICLE_IMAGES.alto,pricePerDay:1800,fuel:"CNG",transmission:"Manual",seats:"4 Seats",rating:4.8,availability:"Available",features:["Unlimited KMs","CNG included","Insurance","24/7 Support"],description:"A practical, efficient city car for everyday Bhopal travel."},
{id:"wagonr",slug:"wagonr-cng",name:"WagonR CNG",category:"Car",image:VEHICLE_IMAGES.wagonr,pricePerDay:2000,fuel:"CNG",transmission:"Manual",seats:"5 Seats",rating:4.8,availability:"Available",features:["Unlimited KMs","CNG included","Insurance","24/7 Support"],description:"Spacious and comfortable for family trips and city drives."},
{id:"dzire",slug:"dzire-cng",name:"Dzire CNG",category:"Car",image:VEHICLE_IMAGES.dzire,pricePerDay:2200,fuel:"CNG",transmission:"Manual",seats:"4 Seats",rating:4.8,availability:"Available",features:["Unlimited KMs","CNG included","Insurance","24/7 Support"],description:"A refined sedan for comfortable business and leisure journeys."},
{id:"activa",slug:"activa-6g",name:"Activa 6G",category:"Bike",image:VEHICLE_IMAGES.activa,pricePerDay:199,fuel:"Petrol",transmission:"Automatic",seats:"2 Seats",rating:4.8,availability:"Available",features:["Helmet support","Insurance","24/7 Support","Easy pickup"],description:"Easy, reliable scooter mobility for everyday city rides."},
{id:"access",slug:"access-125",name:"Access 125",category:"Bike",image:VEHICLE_IMAGES.access,pricePerDay:219,fuel:"Petrol",transmission:"Automatic",seats:"2 Seats",rating:4.8,availability:"Available",features:["Helmet support","Insurance","24/7 Support","Easy pickup"],description:"Comfortable 125cc scooter for longer city rides."},
{id:"jupiter",slug:"jupiter-125",name:"Jupiter 125",category:"Bike",image:VEHICLE_IMAGES.jupiter,pricePerDay:229,fuel:"Petrol",transmission:"Automatic",seats:"2 Seats",rating:4.8,availability:"Available",features:["Helmet support","Insurance","24/7 Support","Easy pickup"],description:"Smooth and practical scooter for Bhopal commuting."}
];
