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
                loc: ["-88.1075137", "43.057806"],
                url: "https://milkhouse.com",
            }
        ],
    },
    {
        email: "hickory@email.com",
        firstName: "Hickory",
        lastName: "NC",
        password: "pa$$word",
        zipCode: 28601,
        role: 'Foodtruck',
        foodTrucks: [
            {
                name: "Stupid stuff!",
                loc: ["-81.3890396", "35.7312647"],
                url: "https://hickory.com",
            }
        ],
    },

];

module.exports = objStore;