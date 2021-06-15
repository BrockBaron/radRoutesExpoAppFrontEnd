import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Polyline} from 'react-native-maps';


const Map = ({region, setRegion, lochLomand, cairngorms, selectedValue, parks, routes, coordinates}) => {


  if (selectedValue !== "Cairngorms" && selectedValue !== "Loch Lomond"){
    setRegion(region)
  }

  if (selectedValue === "Loch Lomond"){
    setRegion(lochLomand)
}

  if (selectedValue === "Cairngorms"){
  setRegion(cairngorms)

}

const arrayOfRoutes = coordinates.map((coordinate, index) => {
  return (
    { latitude: coordinate.latitude, longitude: coordinate.longitude }
  )
})


console.log('coordinates', arrayOfRoutes[0])





// console.log("This is our park object list" + arrayOfParks[0].allRoutes[0].routePoints[0].latitude);


console.log("ARE THOSE ALL ROUTE Latitudes???: " + arrayOfRoutes)
// console.log("ARE THOSE ALL latitudes???: " + routeLatitude)
// console.log("ARE THOSE ALL longitudes???: " + routeLongitude)

console.log(`region:`, region)
console.log(`value:`, selectedValue)

if (arrayOfRoutes.length !== 0){

return(
    <Fragment>
            <MapView 
                style={styles.map}
                initialRegion={region}
            >
            <MapView.Marker
                coordinate={{
                latitude: 56.101491, longitude: -4.642252
                }}
                title={"Route: Luss Village"}
                description={"Description: Flat"}
            />
            <Polyline
                coordinates={arrayOfRoutes}
                  
                
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#7F0000',
                //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#B24112',
                //   '#E5845C',
                //   '#238C23',
                //   '#7F0000'
                // ]}
                strokeWidth={6}
              />
            </MapView>
    </Fragment>

              
);
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '40%',
    width: '100%'
  }
});

export default Map;

    
