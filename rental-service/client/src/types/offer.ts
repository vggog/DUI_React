// type OfferLocation = {
//     latitude: number;
//     longitude: number;
//     zoom: number;
// };
//
// type CityOffer = {
//     name: string;
//     location: OfferLocation;
// };


import type {City, Point} from "./coordinates.ts";

type HostOffer = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type FullOffer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Point;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: HostOffer;
    images: string[];
    neighbors: string[],
    maxAdults: number;
};

export type OffersList = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Point;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
}
