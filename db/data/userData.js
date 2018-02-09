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
                currentLocation: {
                    latitude: "35.2387048",
                    longitude: "-80.8185115",
                },
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
                currentLocation: {
                    latitude: "35.2238751",
                    longitude: "-80.8377787",
                },
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
                currentLocation: {
                    latitude: "35.2149205",
                    longitude: "-80.8565597",
                },
                url: "https://crepes.com",
            }
        ],
    },

];

module.exports = objStore;