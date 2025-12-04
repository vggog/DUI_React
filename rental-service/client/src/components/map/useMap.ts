import {useEffect, useState, useRef, type RefObject} from 'react';
import leaflet, {Map as LeafletMap} from 'leaflet';
import type {City} from '../../types/coordinates.ts';

type MapHookProps = {
    city: City;
    mapRef: RefObject<HTMLDivElement | null>;
};

function useMap({city, mapRef}: MapHookProps) {
    const [map, setMap] = useState<LeafletMap | null>(null);
    const mapInstanceRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        const container = mapRef.current;

        // нет контейнера — ничего не делаем
        if (!container) {
            return;
        }

        // Если карта уже существует, удаляем её перед созданием новой
        if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
            mapInstanceRef.current = null;
        }

        // защитные проверки на структуру city
        const loc = (city as any)?.location;
        const lat = loc?.lat;
        const lng = loc?.lng;
        const zoom = loc?.zoom ?? (city as any)?.zoom;

        if (
            typeof lat !== 'number' ||
            typeof lng !== 'number' ||
            typeof zoom !== 'number'
        ) {
            return;
        }

        const instance = leaflet.map(container, {
            center: {lat, lng},
            zoom,
        });

        leaflet
            .tileLayer(
                'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                },
            )
            .addTo(instance);

        mapInstanceRef.current = instance;
        setMap(instance);

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
            setMap(null);
        };
    }, [mapRef, city]);

    return map;
}

export default useMap;