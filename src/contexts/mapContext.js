import React from "react";

// Provider for the User context.
// It contains two values:
//    - A user object that contains all of the necessary informations to make calls to Imgur's API
//    - A setUser function that allows us to update the userContext if needed.

export const mapContext = React.createContext({
    lng: {},
    setLng: (lng) => {},
    lat: {},
    setLat: (lat) => {}
});