const uuidv1 = require('uuid/v1');

/*
const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    firstName: String,
    lastName: String,
    password: { type: String, required: true, },
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipCode: { type: Number, required: true, },
    role: {
        type: String,
        enum: ['User', 'Foodtruck', 'Vendor'],
        default: ['User']
    },
    // If Foodtruck role, foodtrucks go here.
    foodTrucks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'foodTruck'
        }
    ],
    name: { type:String, required: true },
    currentLocation: {
        type: Schema.Types.ObjectId,
        ref: "Location",
    },
    locations: [{ 
         type: Schema.Types.ObjectId,
         ref: "Location"
    }],
    url: String,
    isOpen: { 
       type: Boolean,
       required: true,
       default: false,
    },
});*/
const objStore = [
    {
        email: "email@email.com",
        firstName: "Donny",
        lastName: "Darko",
        password: "Doesn't Matter",
        zipCode: 28206,
        role: ['Foodtruck'],
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
];

module.exports = objStore;