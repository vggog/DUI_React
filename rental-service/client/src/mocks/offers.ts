import type {FullOffer} from '../types/offer.ts';
// 'id': 'bbb86a0e-3f92-446d-9a6e-cbd4b5d38e2b',

export const offers: FullOffer[] = [
    {
        'id': '1',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
        'type': 'apartment',
        'price': 370,
        'images': [
            '../../public/img/paris/img.png',
            '../../public/img/paris/img_1.png',
            '../../public/img/paris/img_2.png',
            '../../public/img/paris/img_3.png',
            '../../public/img/paris/img_4.png',
            '../../public/img/paris/img_5.png'
        ],
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 48.858610800000004,
            'longitude': 2.342499,
            'zoom': 16
        },
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': '../../public/img/avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
        'id': '2',
        'title': 'Modern Loft in City Center',
        'description': 'Stylish loft apartment with high ceilings and industrial design. Perfect for urban explorers and couples',
        'type': 'loft',
        'price': 420,
        'images': [
            '../../public/img/berlin/img.png',
            '../../public/img/berlin/img_1.png',
            '../../public/img/berlin/img_2.png',
            '../../public/img/berlin/img_3.png',
            '../../public/img/berlin/img_4.png',
            '../../public/img/berlin/img_5.png'
        ],
        'city': {
            'name': 'Berlin',
            'location': {
                'latitude': 52.5200,
                'longitude': 13.4050,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 52.5244,
            'longitude': 13.4105,
            'zoom': 15
        },
        'goods': [
            'Wi-Fi',
            'Air conditioning',
            'Heating',
            'Kitchen',
            'Coffee machine',
            'TV',
            'Workspace',
            'Hair dryer',
            'Iron',
            'Elevator'
        ],
        'host': {
            'isPro': true,
            'name': 'Maximilian',
            'avatarUrl': '../../public/img/avatar-max.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7,
        'bedrooms': 1,
        'maxAdults': 2
    },
    {
        'id': '3',
        'title': 'Cozy Countryside Cottage',
        'description': 'Charming cottage surrounded by nature. Fireplace, garden and peaceful atmosphere for a perfect getaway',
        'type': 'house',
        'price': 280,
        'images': [
            '../../public/img/marcel/img.png',
            '../../public/img/marcel/img_1.png',
            '../../public/img/marcel/img_2.png',
            '../../public/img/marcel/img_3.png',
            '../../public/img/marcel/img_4.png',
            '../../public/img/marcel/img_5.png'
        ],
        'city': {
            'name': 'Marcel',
            'location': {
                'latitude': 43.9493,
                'longitude': 4.8054,
                'zoom': 10
            }
        },
        'location': {
            'latitude': 43.9512,
            'longitude': 4.8089,
            'zoom': 14
        },
        'goods': [
            'Fireplace',
            'Garden',
            'BBQ',
            'Parking',
            'Kitchen',
            'Wi-Fi',
            'Heating',
            'Pet friendly',
            'Washing machine'
        ],
        'host': {
            'isPro': false,
            'name': 'Sophie',
            'avatarUrl': '../../public/img/avatar-sophie.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 3,
        'maxAdults': 6
    },
    {
        'id': '4',
        'title': 'Luxury Penthouse with Sea View',
        'description': 'Exclusive penthouse with panoramic sea views, private pool and premium amenities for the discerning traveler',
        'type': 'apartment',
        'price': 890,
        'images': [
            'penthouse1.jpg',
            'penthouse2.jpg',
            'penthouse3.jpg',
            'penthouse4.jpg',
            'penthouse5.jpg',
            'penthouse6.jpg',
            'penthouse7.jpg'
        ],
        'city': {
            'name': 'Monaco',
            'location': {
                'latitude': 43.7384,
                'longitude': 7.4246,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 43.7396,
            'longitude': 7.4270,
            'zoom': 16
        },
        'goods': [
            'Swimming pool',
            'Air conditioning',
            'Heating',
            'Jacuzzi',
            'Sauna',
            'Gym',
            'Concierge',
            'Parking',
            'Elevator',
            'Smart TV',
            'Wi-Fi',
            'Kitchen',
            'Wine cooler',
            'Security system'
        ],
        'host': {
            'isPro': true,
            'name': 'Alexander',
            'avatarUrl': '../../public/img/avatar-alex.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 5.0,
        'bedrooms': 4,
        'maxAdults': 8
    },
    {
        'id': '5',
        'title': 'Luxury Penthouse with Sea View',
        'description': 'Exclusive penthouse with panoramic sea views, private pool and premium amenities for the discerning traveler',
        'type': 'apartment',
        'price': 890,
        'images': [
            'penthouse1.jpg',
            'penthouse2.jpg',
            'penthouse3.jpg',
            'penthouse4.jpg',
            'penthouse5.jpg',
            'penthouse6.jpg',
            'penthouse7.jpg'
        ],
        'city': {
            'name': 'Monaco',
            'location': {
                'latitude': 43.7384,
                'longitude': 7.4246,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 43.7396,
            'longitude': 7.4270,
            'zoom': 16
        },
        'goods': [
            'Swimming pool',
            'Air conditioning',
            'Heating',
            'Jacuzzi',
            'Sauna',
            'Gym',
            'Concierge',
            'Parking',
            'Elevator',
            'Smart TV',
            'Wi-Fi',
            'Kitchen',
            'Wine cooler',
            'Security system'
        ],
        'host': {
            'isPro': true,
            'name': 'Alexander',
            'avatarUrl': '../../public/img/avatar-alex2.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 5.0,
        'bedrooms': 4,
        'maxAdults': 8
    }
];

