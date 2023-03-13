import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import favicon from "@/public/favicon.svg";
import Image from "next/image";
import { useRef, useEffect } from "react";

const LocationMap = () => {
  const mapContainer = useRef<any>();
  const map = useRef<mapboxgl.Map | null>();
  const marker = useRef<any>();

  const redirectToGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/Pizza+Denis/@42.7748114,2.9896778,15z/data=!4m2!3m1!1s0x0:0xe07705f6bf2b72a?sa=X&ved=2ahUKEwjv7MiMgNr9AhWcQ6QEHa7EAF0Q_BJ6BAhcEAg", "_blank");
  };

  useEffect(() => {
    map.current = new mapboxgl.Map({
      accessToken: process.env.NEXT_PUBLIC_MAPBIX_API_KEY ?? "",
      container: mapContainer.current as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [2.9896782683347594, 42.77480594492797],
      zoom: 14.8,
      pitch: 40,
    });

    map.current.on("style.load", () => {
      const layers: mapboxgl.AnyLayer[] | undefined = map.current?.getStyle().layers;
      const labelLayerId = layers?.find((layer) => layer.type === "symbol" && layer.layout?.["text-field"])?.id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.current?.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 10,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "height"]],
            "fill-extrusion-base": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "min_height"]],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );

      // Add a marker to the map
      new mapboxgl.Marker(marker.current).setLngLat([2.9896782683347594, 42.77480594492797]).addTo(map.current as mapboxgl.Map);
    });

    // Clean up on unmount
    return () => map.current?.remove();
  });

  return (
    <>
      <Image ref={marker} className="absolute drop-shadow-lg hoverable" onClick={redirectToGoogleMaps} src={favicon} alt="Marqueur de carte avec le logo de Pizza Denis" width={40} />
      <div className="w-full md:w-4/6 h-80 bg-black rounded-lg shadow-md" ref={mapContainer}></div>
    </>
  );
};

export default LocationMap;
