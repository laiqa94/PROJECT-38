"use strict";
function describe_city(city, country = 'Defaultcountry.') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi', 'pakistan');
describe_city('Tokyo', 'Japan');
describe_city('paris');
