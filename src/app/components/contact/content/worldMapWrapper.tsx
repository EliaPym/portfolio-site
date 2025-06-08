import { WorldMap } from "@/app/components/backgrounds/worldMap";

export default function WorldMapWrapper() {
  return (
    <WorldMap
      dots={[
        {
          start: { lat: 44, lng: -0.5 }, // London
          end: { lat: 29, lng: -73 }, // New York
        },
        {
          start: { lat: 29, lng: -73 }, // New York
          end: { lat: 42.5, lng: -124 }, // Vancouver
        },
        {
          start: { lat: 0, lng: 75 }, // Mumbai
          end: { lat: -55, lng: 151 }, // Sydney
        },
        {
          start: { lat: 29, lng: 13 }, // Rome
          end: { lat: 8, lng: 55 }, // Dubai
        },
        {
          start: { lat: 8, lng: 55 }, // Dubai
          end: { lat: 26, lng: 115 }, // Beijing
        },
        {
          start: { lat: -41.5, lng: -47 }, // Sao Paulo
          end: { lat: -51.5, lng: 19.6 }, // Cape Town
        },
      ]}
    />
  );
}
