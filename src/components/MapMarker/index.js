import React, { memo } from 'react';
import { isEqual, omit, functions } from 'lodash';
import { Marker as GoogleMapsMarker } from 'google-maps-react';

const propsAreEqual = (props, nextProps) => {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)];
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs));
  const noFuncChange = funcs.length === nextFuncs.length &&
    funcs.every(fn => props[fn].toString() === nextProps[fn].toString());
  return noPropChange && noFuncChange;
};

export const MapMarker = memo(({
  marker,
  active,
  isHighest,
  onChangeMarker,
  ...props
}) => {
  const {
    name,
    geo,
  } = marker;

  return (
    <GoogleMapsMarker
      position={geo}
      onClick={(prop, mapMarker) => {
        onChangeMarker(mapMarker, marker);
      }}
      title={name}
      icon={{
        url: isHighest ? '/assets/images/marker-highest.svg' : '/assets/images/marker.svg',
      }}
      {...props}
    />
  );
}, propsAreEqual);
