/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect('mongodb+srv://rayreyrey:cen3031bootcamp2@cluster0-oyuxv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.findOne({name: 'Library West'}, function (err, listing) {
     if (err) return err;

     console.log(listing);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.deleteOne({code: 'CABL'}, function (err, listing) {
     if (err) return err;

     console.log('Deleted');
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then
    log the updated document to the console.

    Correct Address: 1953 Museum Rd, Gainesville, FL 32603
   */
   Listing.updateOne({name: 'Phelps Laboratory'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, function (err, listing) {
     if (err) return err;

     console.log('Updated');
   });
   Listing.findOne({name: 'Phelps Laboratory'}, function (err, listing) {
     if (err) return err;

     console.log(listing);
   });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find(function (err, listing) {
     if (err) return err;

     console.log(listing);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
