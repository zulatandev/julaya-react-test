import React, { useEffect, useMemo, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import { MapMarker } from '../MapMarker';
import { MapInfoPopup } from '../MapInfoPopup';
import { getTotalScore } from '../../utils/agent.util';

const MapArea = (props) => {
  const { google, markers } = props;
  const [activeMarker, setActiveMarker] = useState(null);
  const [bounds, setBounds] = useState();

  const highestMarker = useMemo(() => {
    return markers.sort((a, b) => getTotalScore(b) - getTotalScore(a))[0];
  }, [markers]);

  const infoVisible = Boolean(activeMarker);

  const handleChangeMarker = (mapMarker, marker) => {
    if (activeMarker && activeMarker.id === marker.id) {
      setActiveMarker(null);
    } else {
      setActiveMarker(marker);
    }
  };

  const handleClose = () => {
    setActiveMarker(null);
  };

  useEffect(() => {
    const newBounds = new google.maps.LatLngBounds();
    markers.forEach(marker => newBounds.extend(marker.geo))
    setBounds(newBounds);
  }, [markers, google.maps.LatLngBounds])

  return (
    <div>
      <Map
        google={google}
        bounds={bounds}
        gestureHandling="cooperative"
      >
        {markers && markers.map((marker, index) => (
          <MapMarker
            key={index}
            marker={marker}
            isHighest={highestMarker.id === marker.id}
            active={activeMarker && marker.id === activeMarker.id}
            onChangeMarker={handleChangeMarker}
          />
        ))}
      </Map>
      {
        infoVisible && <MapInfoPopup marker={activeMarker} visible={infoVisible} onClose={handleClose} />
      }
    </div>
  );
};

export default GoogleApiWrapper(function () {
  return {
    apiKey: 'AIzaSyB-aQ_qgNWRBRvMz5jlS8T9g3DU_Ob5ly0',
    libraries: ['visualization'],
    panControl: false,
    mapTypeControl: false,
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: 'off' },
        ],
      },
    ],
  };
})(MapArea);
