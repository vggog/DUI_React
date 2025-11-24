import type {OffersList} from "../types/offer.ts";

export const offersList: OffersList[] = [
    {
        id: '1',
        title: 'Wood and stone place',
        type: 'apartment',
        price: 370,
        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.858610800000004,
            longitude: 2.342499,
            zoom: 16
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.9,
        previewImage: '../../public/img/paris/img.png'
    },
    {
        id: '2',
        title: 'Modern Loft in City Center',
        type: 'loft',
        price: 420,
        city: {
            name: 'Berlin',
            location: {
                latitude: 52.5200,
                longitude: 13.4050,
                zoom: 12
            }
        },
        location: {
            latitude: 52.5244,
            longitude: 13.4105,
            zoom: 15
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.7,
        previewImage: '../../public/img/berlin/img.png'
    },
    {
        id: '3',
        title: 'Cozy Countryside Cottage',
        type: 'house',
        price: 280,
        city: {
            name: 'Marcel',
            location: {
                latitude: 43.9493,
                longitude: 4.8054,
                zoom: 10
            }
        },
        location: {
            latitude: 43.9512,
            longitude: 4.8089,
            zoom: 14
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.8,
        previewImage: '../../public/img/marcel/img.png'
    },
    {
        id: '4',
        title: 'Luxury Penthouse with Sea View',
        type: 'apartment',
        price: 890,
        city: {
            name: 'Monaco',
            location: {
                latitude: 43.7384,
                longitude: 7.4246,
                zoom: 13
            }
        },
        location: {
            latitude: 43.7396,
            longitude: 7.4270,
            zoom: 16
        },
        isFavorite: true,
        isPremium: true,
        rating: 5.0,
        previewImage: 'penthouse1.jpg'
    },
    {
        id: '5',
        title: 'Luxury Penthouse with Sea View',
        type: 'apartment',
        price: 890,
        city: {
            name: 'Monaco',
            location: {
                latitude: 43.7384,
                longitude: 7.4246,
                zoom: 13
            }
        },
        location: {
            latitude: 43.7396,
            longitude: 7.4270,
            zoom: 16
        },
        isFavorite: false,
        isPremium: true,
        rating: 5.0,
        previewImage: 'penthouse1.jpg'
    }
];