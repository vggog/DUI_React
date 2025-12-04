import type {FullOffer} from '../types/offer.ts';

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
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                'lat': 52.370216,
                'lng': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'id': '1',
            'title': 'Amsterdam',
            'lat': 52.3702,
            'lng': 4.8952,
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
        'maxAdults': 3,
        'neighbors': ['2', '3', '5']
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
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                'lat': 52.370216,
                'lng': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'id': '2',
            'title': 'Amsterdam',
            'lat': 52.3589,
            'lng': 4.8811,
            'zoom': 16
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
        'maxAdults': 2,
        'neighbors': ['1', '3', '4']
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
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                'lat': 52.370216,
                'lng': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'id': '3',
            'title': 'Amsterdam',
            'lat': 52.3633,
            'lng': 4.8875,
            'zoom': 16
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
        'maxAdults': 6,
        'neighbors': ['2', '4', '5']
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
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                'lat': 52.370216,
                'lng': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'id': '4',
            'title': 'Amsterdam',
            'lat': 52.3696,
            'lng': 4.8828,
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
        'maxAdults': 8,
        'neighbors': ['1', '2', '3']
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
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                'lat': 52.370216,
                'lng': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'id': '5',
            'title': 'Amsterdam',
            'lat': 52.3678,
            'lng': 4.8958,
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
        'maxAdults': 8,
        'neighbors': ['2', '3', '4']
    }
];