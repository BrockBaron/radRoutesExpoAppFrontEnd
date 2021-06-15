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




console.log('coordinates', JSON.stringify(arrayOfRoutes))

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
                coordinates={arrayOfRoutes[0], arrayOfRoutes[1], arrayOfRoutes[2], arrayOfRoutes[3], arrayOfRoutes[4], arrayOfRoutes[5]}
                  
                
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

<Polyline
                coordinates={arrayOfRoutes[6], arrayOfRoutes[7], arrayOfRoutes[8], arrayOfRoutes[9], arrayOfRoutes[10], arrayOfRoutes[11]}
                  
                
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

    
