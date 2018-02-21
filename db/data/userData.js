'use strict';
// ----------------------------------------------------
// --- U S E R D A T A . J S --------------------------
// ----------------------------------------------------


const uuidv1 = require('uuid/v1');

const objStore = [
    {
        email: "a@email.com",
        password: "pa$$word",
        zipCode: 28206,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Hifalutin Foods!",
                isOpen: true,
                loc: ["-80.8185115", "35.2387048"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "b@email.com",
        password: "pa$$word",
        zipCode: 28206,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Taco Boy",
                isOpen: true,
                loc:  ["-80.8377787", "35.2238751"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "c@email.com",
        password: "pa$$word",
        zipCode: 28206,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Crepes!",
                isOpen: true,
                loc: ["-80.8565597", "35.2149205"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "d@email.com",
        password: "pa$$word",
        zipCode: 94129,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Burger, She Wrote",
                isOpen: true,
                loc: ["-122.4836139", "37.7461481"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "e@email.com",
        password: "pa$$word",
        zipCode: 53205,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Cluck It Up",
                isOpen: true,
                loc: ["-88.1075137", "43.057806"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "f@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Curry Up Now",
                isOpen: true,
                loc: ["-80.852330", "35.221999"],
                url: "https://google.com",
            }
        ],
    },

    {
        email: "g@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Easy Slider",
                isOpen: true,
                loc: ["-80.852749", "35.211537"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "h@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Grillenium Falcon",
                isOpen: true,
                loc: ["-80.863271", "35.220156"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "i@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Hamborghini",
                isOpen: true,
                loc: ["-80.858069", "35.206062"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "j@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Guac-n-Roll",
                isOpen: true,
                loc: ["-80.836245", "35.198810"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "k@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Mama's Tapas",
                isOpen: true,
                loc: ["-80.860786", "35.201738"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "l@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Nacho Bizness",
                isOpen: true,
                loc: ["-80.804989", "35.224467"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "m@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Spamerican Tour",
                isOpen: true,
                loc: ["-80.856032", "35.254051"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "n@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Crazy Pyes",
                isOpen: true,
                loc: ["-80.830641", "35.256225"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "o@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Truck Norris",
                isOpen: true,
                loc: ["-80.909605", "35.269500"],
                url: "https://google.com",
            }
        ],
    },
    {
        email: "p@email.com",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Trailer Pork Boys",
                isOpen: true,
                loc: ["-118.247741", "34.045258"],
                url: "https://google.com",
            }
        ],
    },


];

module.exports = objStore;