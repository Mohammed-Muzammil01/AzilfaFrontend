

const products1 = [
  {
    id: 1,
    name: "Argentina Home Kit",
    description: "Official home kit of Argentina.",
    images: ["1-1.jpg", "1-2.jpg", "1-3.jpeg", "1-4.jpg"],
  },
  {
    id: 2,
    name: "Argentina Away Kit",
    description: "Official away kit of Argentina.",
    images: ["2-1.jpg", "2-2.jpg", "2-3.jpeg", "2-4.jpeg"],
  },
  {
    id: 3,
    name: "Brazil Home Kit",
    description: "Official home kit of Brazil.",
    images: ["3-1.jpg", "3-2.jpg", "3-3.jpg"],
  },
  {
    id: 4,
    name: "Brazil Away Kit",
    description: "Official away kit of Brazil.",
    images: ["4-1.jpg", "4-2.jpg", "4-3.jpeg"],
  },
  {
    id: 5,
    name: "England Home Kit",
    description: "Official home kit of England.",
    images: ["5-1.jpeg", "5-2.jpeg"],
  },
  {
    id: 6,
    name: "England Away Kit",
    description: "Official away kit of England.",
    images: ["6-1.jpeg", "6-2.jpg"],
  },
  {
    id: 7,
    name: "France Home Kit",
    description: "Official home kit of France.",
    images: ["7-1.jpg", "7-2.jpeg", "7-3.webp"],
  },
  {
    id: 8,
    name: "France Away Kit",
    description: "Official away kit of France.",
    images: ["8-1.webp", "8-2.jpg", "8-3.webp"],
  },
  {
    id: 9,
    name: "Germany Home Kit",
    description: "Official home kit of Germany.",
    images: ["9-1.webp", "9-2.webp", "9-3.jpeg"],
  },
  {
    id: 10,
    name: "Germany Away Kit",
    description: "Official away kit of Germany.",
    images: ["10-1.webp", "10-2.png"],
  },
  {
    id: 11,
    name: "Ghana Home Kit",
    description: "Official home kit of Ghana.",
    images: ["11-1.jpg", "11-2.webp", "11-3.jpg"],
  },
  {
    id: 12,
    name: "Ghana Away Kit",
    description: "Official away kit of Ghana.",
    images: ["12-1.png", "12-2.jpeg"],
  },
  {
    id: 13,
    name: "Nigeria Home Kit",
    description: "Official home kit of Nigeria.",
    images: ["13-1.jpeg", "13-2.jpeg"],
  },
  {
    id: 14,
    name: "Nigeria Away Kit",
    description: "Official away kit of Nigeria.",
    images: ["14-1.jpg", "14-2.webp"],
  },
  {
    id: 15,
    name: "Portugal Home Kit",
    description: "Official home kit of Portugal.",
    images: ["15-1.jpg", "15-2.webp"],
  },
  {
    id: 16,
    name: "Portugal Away Kit",
    description: "Official away kit of Portugal.",
    images: ["16-1.png", "16-2.jpg", "16-3.jpeg", "16-4.jpeg"],
  },
  {
    id: 17,
    name: "Qatar Home Kit",
    description: "Official home kit of Qatar.",
    images: ["17-1.jpg", "17-2.jpg"],
  },
  {
    id: 18,
    name: "Qatar Away Kit",
    description: "Official away kit of Qatar.",
    images: ["18-1.jpg", "18-2.jpeg"],
  },
  {
    id: 19,
    name: "Saudi Arabia Home Kit",
    description: "Official home kit of Saudi Arabia.",
    images: ["19-1.jpeg", "19-2.webp"],
  },
  {
    id: 20,
    name: "Saudi Arabia Away Kit",
    description: "Official away kit of Saudi Arabia.",
    images: ["20-1.jpg", "20-2.webp"],
  },
  {
    id: 21,
    name: "Spain Home Kit",
    description: "Official home kit of Spain.",
    images: ["21-1.jpg"],
  },
  {
    id: 22,
    name: "Spain Away Kit",
    description: "Official away kit of Spain.",
    images: ["22-1.jpg"],
  },
  {
    id: 23,
    name: "Special Kit 1",
    description: "Special kit for your team.",
    images: ["23-1.png", "23-2.png", "23-3.png"],
    isSpecial: true
  },
  {
    id: 24,
    name: "Special Kit 2",
    description: "Special kit for your team.",
    images: ["24-1.png", "24-2.png", "24-3.png"],
    isSpecial: true
  },
  {
    id: 25,
    name: "Special Kit 3",
    description: "Special kit for your team.",
    images: ["25-1.png", "25-2.png", "25-3.png"],    
    isSpecial: true
  },
  {
    id: 26,
    name: "Special Kit 4",
    description: "Special kit for your team.",
    images: ["26-1.png", "26-2.png", "26-3.png"],
    isSpecial: true
  },
  {
    id: 27,
    name: "Special Kit 5",
    description: "Special kit for your team.",
    images: ["27-1.png", "27-2.png", "27-3.png"],
    isSpecial: true
  },
  {
    id: 28,
    name: "Special Kit 6",
    description: "Special kit for your team.",
    images: ["28-1.png", "28-2.png", "28-3.png", "28-.4png"],
    isSpecial: true
  },
  {
    id: 29,
    name: "Special Kit 7",
    description: "Special kit for your team.",
    images: ["29-1.png", "29-2.png", "29-3.png"],
    isSpecial: true
  },
  {
    id: 30,
    name: "Special Kit 8",
    description: "Special kit for your team.",
    images: ["30-1.png", "30-2.png", "30-3.png"],
    isSpecial: true
  },
  {
    id: 31,
    name: "Special Kit 9",
    description: "Special kit for your team.",
    images: ["31-1.png", "31-2.png", "31-3.png", "31-4.png", "31-5.png"],
    isSpecial: true
  },
  {
    id: 32,
    name: "Special Kit 10",
    description: "Special kit for your team.",
    images: ["32-1.png", "32-2.png", "32-3.png"],
    isSpecial: true
  },
  {
    id: 33,
    name: "Arsenal Home Jersey",
    description: "Official home kit of Arsenal.",
    images: ["33-1.jpeg", "33-2.jpeg", "33-3.jpeg"],
  },
  {
    id: 34,
    name: "Arsenal Away Jersey",
    description: "Official away kit of Arsenal.",
    images: ["34-1.jpeg", "34-2.jpeg"],
  },
  {
    id: 35,
    name: "Aston Villa Home Jersey",
    description: "Official home kit of Aston Villa.",
    images: ["35-1.jpeg", "35-2.jpeg"],
  },
  {
    id: 36,
    name: "Aston Villa Away Jersey",
    description: "Official away kit of Aston Villa.",
    images: ["36-1.jpeg", "36-2.jpeg"],
  },
  {
    id: 37,
    name: "Chelsea Home Jersey",
    description: "Official home kit of Chelsea.",
    images: ["37-1.jpeg", "37-2.jpeg", "37-3.jpeg"],
  },
  {
    id: 38,
    name: "Chelsea Away Jersey",
    description: "Official away kit of Chelsea.",
    images: ["38-1.jpeg"],
  },
  {
    id: 39,
    name: "Everton Home Jersey",
    description: "Official home kit of Everton.",
    images: ["39-1.jpeg", "39-2.jpeg", "39-3.jpeg"],
  },
  {
    id: 40,
    name: "Everton Away Jersey",
    description: "Official away kit of Everton.",
    images: ["40-1.jpeg"],
  },
  {
    id: 41,
    name: "Leicester City Home Jersey",
    description: "Official home kit of Leicester City.",
    images: ["41-1.jpeg", "41-2.jpeg"],
  },
  {
    id: 42,
    name: "Leicester City Away Jersey",
    description: "Official away kit of Leicester City.",
    images: ["42-1.jpeg", "42-2.jpeg"],
  },
  {
    id: 43,
    name: "Liverpool Home Jersey",
    description: "Official home kit of Liverpool.",
    images: ["43-1.jpg", "43-2.jpg", "43-3.jpg"],
  },
  {
    id: 44,
    name: "Liverpool Away Jersey",
    description: "Official away kit of Liverpool.",
    images: ["44-1.jpg", "44-2.jpg"],
  },
  {
    id: 45,
    name: "Manchester City Home Jersey",
    description: "Official home kit of Manchester City.",
    images: ["45-1.jpg", "45-2.jpg", "45-3.jpg"],
  },
  {
    id: 46,
    name: "Manchester City Away Jersey",
    description: "Official away kit of Manchester City.",
    images: ["46-1.jpg"],
  },
  {
    id: 47,
    name: "Manchester United Home Jersey",
    description: "Official home kit of Manchester United.",
    images: ["47-1.jpg", "47-2.jpeg", "47-3.jpeg"],
  },
  {
    id: 48,
    name: "Manchester United Away Jersey",
    description: "Official away kit of Manchester United.",
    images: ["48-1.jpeg", "48-2.jpeg"],
  },
  {
    id: 49,
    name: "Tottenham Hotspur Home Jersey",
    description: "Official home kit of Tottenham Hotspur.",
    images: ["49-1.jpeg", "49-2.jpeg", "49-3.jpeg"],
  },
  {
    id: 50,
    name: "Tottenham Hotspur Away Jersey",
    description: "Official away kit of Tottenham Hotspur.",
    images: ["50-1.jpeg", "50-2.jpeg"],
  },
  {
    id: 51,
    name: "West Ham United Home Jersey",
    description: "Official home kit of West Ham United.",
    images: ["51-1.jpeg", "51-2.jpeg", "51-3.jpeg"],
  },
  {
    id: 52,
    name: "West Ham United Away Jersey",
    description: "Official away kit of West Ham United.",
    images: ["52-1.jpeg", "52-2.jpeg"],
  },
  {
    id: 53,
    name: "Al Nasr Home Kit",
    description: "Official home kit of Al Nasr.",
    images: ["53-1.jpeg", "53-2.jpeg", "53-3.jpeg"],
  },
  {
    id: 54,
    name: "Al Nasr Away Kit",
    description: "Official away kit of Al Nasr.",
    images: ["54-1.jpeg", "54-2.jpeg"],
  },
  {
    id: 55,
    name: "Miami FC Home Kit",
    description: "Official away kit of Miami FC.",
    images: ["55-1.jpeg", "55-2.jpeg"],
  },
  {
    id: 56,
    name: "Miami FC Away Kit",
    description: "Official away kit of Miami FC.",
    images: ["56-1.jpeg"],
  },
  {
    id: 57,
    name: "Atletico Madrid Home Kit",
    description: "Official home kit of Atletico Madrid.",
    images: ["57-1.jpeg", "57-2.jpeg", "57-3.jpeg"],
  },
  {
    id: 58,
    name: "Atletico Madrid Away Kit",
    description: "Official away kit of Atletico Madrid.",
    images: ["58-1.jpeg", "58-2.jpeg"],
  },
  {
    id: 59,
    name: "FC Barcelona Home Kit",
    description: "Official home kit of FC Barcelona.",
    images: ["59-1.jpg", "59-2.jpg", "59-3.jpg"],
  },
  {
    id: 60,
    name: "FC Barcelona Away Kit",
    description: "Official away kit of FC Barcelona.",
    images: ["60-1.jpg", "60-2.jpg", "60-3.jpg"],
  },
  {
    id: 61,
    name: "Real Madrid Home Kit",
    description: "Official home kit of Real Madrid.",
    images: ["61-1.jpeg", "61-2.jpeg", "61-3.jpeg"],
  },
  {
    id: 62,
    name: "Real Madrid Away Kit",
    description: "Official away kit of Real Madrid.",
    images: ["62-1.jpeg", "62-2.jpeg"],
  },
  {
    id: 63,
    name: "Sevilla Home Kit",
    description: "Official home kit of Sevilla.",
    images: ["63-1.jpeg", "63-2.jpeg"],
  },
  {
    id: 64,
    name: "Sevilla Away Kit",
    description: "Official away kit of Sevilla.",
    images: ["64-1.jpeg", "64-2.jpeg"],
  },
  {
    id: 65,
    name: "Valencia Home Kit",
    description: "Official home kit of Valencia.",
    images: ["65-1.jpeg", "65-2.jpeg"],
  },
  {
    id: 66,
    name: "Valencia Away Kit",
    description: "Official away kit of Valencia.",
    images: ["66-1.jpeg", "66-2.jpeg"],
  },
  {
    id: 67,
    name: "Villarreal Home Kit",
    description: "Official home kit of Villarreal.",
    images: ["67-1.jpeg", "67-2.jpeg"],
  },
  {
    id: 68,
    name: "Villarreal Away Kit",
    description: "Official away kit of Villarreal.",
    images: ["68-1.jpeg", "68-2.jpeg"],
  },
];

export default products1;