'use strict';
// ----------------------------------------------------
// --- U S E R D A T A . J S --------------------------
// ----------------------------------------------------


const uuidv1 = require('uuid/v1');

const objStore = [
    {
        email: "email@email.com",
        firstName: "Donny",
        lastName: "Darko",
        password: "pa$$word",
        zipCode: 28206,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Hifalutin Foods!",
                isOpen: true,
                loc: ["-80.8185115", "35.2387048"],
                url: "https://hifalutinfoods.com",
            }
        ],
    },
    {
        email: "rogers@email.com",
        firstName: "Milkshake",
        lastName: "McGoo",
        password: "pa$$word",
        zipCode: 28206,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Pork Tacos!",
                isOpen: true,
                loc:  ["-80.8377787", "35.2238751"],
                url: "https://porktacos.com",
            }
        ],
    },
    {
        email: "nickycakes@email.com",
        firstName: "Nicky",
        lastName: "Cakes",
        password: "pa$$word",
        zipCode: 28206,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Crepes!",
                isOpen: true,
                loc: ["-80.8565597", "35.2149205"],
                url: "https://crepes.com",
            }
        ],
    },
    {
        email: "cali@email.com",
        firstName: "California",
        lastName: "Citchen",
        password: "pa$$word",
        zipCode: 94129,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Crepes!",
                isOpen: true,
                loc: ["-122.4836139", "37.7461481"],
                url: "https://crepes.com",
            }
        ],
    },
    {
        email: "milwaukee@email.com",
        firstName: "Milwaukee",
        lastName: "WI",
        password: "pa$$word",
        zipCode: 53205,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Stupid stuff!",
                isOpen: true,
                loc: ["-88.1075137", "43.057806"],
                url: "https://milkhouse.com",
            }
        ],
    },
    {
        email: "hello@email.com",
        firstName: "",
        lastName: "",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "",
                isOpen: true,
                loc: ["-80.852330", "35.221999"],
                url: "",
            }
        ],
    },

    {
        email: "bubba@email.com",
        firstName: "",
        lastName: "",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "",
                isOpen: true,
                loc: ["-80.852749", "35.211537"],
                url: "",
            }
        ],
    },
    {
        email: "dan@email.com",
        firstName: "",
        lastName: "",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "",
                isOpen: true,
                loc: ["-80.863271", "35.220156"],
                url: "",
            }
        ],
    },
    {
        email: "travis@email.com",
        firstName: "",
        lastName: "",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "",
                isOpen: true,
                loc: ["-80.858069", "35.206062"],
                url: "",
            }
        ],
    },
    {
        email: "jordan@email.com",
        firstName: "",
        lastName: "",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "",
                isOpen: true,
                loc: ["-80.836245", "35.198810"],
                url: "",
            }
        ],
    },
    {
        email: "colin@email.com",
        firstName: "",
        lastName: "",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "",
                isOpen: true,
                loc: ["-80.860786", "35.201738"],
                url: "",
            }
        ],
    },
    {
        email: "josh@email.com",
        firstName: "",
        lastName: "",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "",
                isOpen: true,
                loc: ["-80.804989", "35.224467"],
                url: "",
            }
        ],
    },

];

module.exports = objStore;