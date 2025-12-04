
import {useRef, useEffect} from 'react';
import leaflet, {LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from './const';
import type {City, Point} from "../../types/coordinates.ts";

type MapComponentProps = {
    city: City,
    points: Point[]
    selectedPoint: Point | undefined | null
};

function Map({city, points, selectedPoint}: MapComponentProps) {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const map = useMap({city, mapRef});
    const markerGroupRef = useRef<LayerGroup | null>(null);

    const defaultCustomIcon = leaflet.icon({
        iconUrl: URL_MARKER_DEFAULT,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    const currentCustomIcon = leaflet.icon({
        iconUrl: URL_MARKER_CURRENT,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    // Инициализируем layerGroup при создании/изменении карты
    useEffect(() => {
        if (!map) return;

        // Удаляем старый layerGroup если он существует
        if (markerGroupRef.current) {
            markerGroupRef.current.clearLayers();
            map.removeLayer(markerGroupRef.current);
        }

        // Создаём новый layerGroup
        markerGroupRef.current = leaflet.layerGroup().addTo(map);
    }, [map]);

    // Добавляем маркеры
    useEffect(() => {
        if (!map || !markerGroupRef.current) return;

        // Очищаем маркеры
        markerGroupRef.current.clearLayers();

        // Добавляем новые маркеры
        points.forEach((point: Point) => {
            const marker = leaflet.marker(
                { lat: point.lat, lng: point.lng },
                {
                    icon: (point.id === selectedPoint?.id)
                        ? currentCustomIcon
                        : defaultCustomIcon,
                },
            );
            marker.addTo(markerGroupRef.current!);
        });
    }, [map, points, selectedPoint]);

    return (
        <div
            style={{height: '100%', width: '100%'}}
            ref={mapRef}
        >
        </div>
    );
}

export default Map;