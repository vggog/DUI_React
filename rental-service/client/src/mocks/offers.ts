import type {FullOffer} from '../types/offer.ts';

export const offers: FullOffer[] = [
    {
        'id': '1',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
        'type': 'apartment',
        'price': 370,
        'images': [
            '../../public/img/amsterdam/1/img.png',
            '../../public/img/amsterdam/1/img_1.png',
            '../../public/img/amsterdam/1/img_2.png',
            '../../public/img/amsterdam/1/img_3.png',
            '../../public/img/amsterdam/1/img_4.png',
            '../../public/img/amsterdam/1/img_5.png'
        ],
        'city': {
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                lat: 52.366021,
                lng: 4.890430,
                zoom: 14
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
            'avatarUrl': '../../public/img/users/avatar-angelina.jpg'
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
            '../../public/img/amsterdam/2/img.png',
            '../../public/img/amsterdam/2/img_1.png',
            '../../public/img/amsterdam/2/img_2.png',
            '../../public/img/amsterdam/2/img_3.png',
            '../../public/img/amsterdam/2/img_4.png',
            '../../public/img/amsterdam/2/img_5.png'
        ],
        'city': {
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                lat: 52.366021,
                lng: 4.890430,
                zoom: 14
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
            'avatarUrl': '../../public/img/users/avatar-max.jpg'
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
            '../../public/img/amsterdam/3/img.png',
            '../../public/img/amsterdam/3/img_1.png',
            '../../public/img/amsterdam/3/img_2.png',
            '../../public/img/amsterdam/3/img_3.png',
            '../../public/img/amsterdam/3/img_4.png',
            '../../public/img/amsterdam/3/img_5.png'
        ],
        'city': {
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                lat: 52.366021,
                lng: 4.890430,
                zoom: 14
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
            'avatarUrl': '../../public/img/users/avatar-sophie.jpg'
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
            '../../public/img/amsterdam/4/img.png',
            '../../public/img/amsterdam/4/img_1.png',
            '../../public/img/amsterdam/4/img_2.png',
            '../../public/img/amsterdam/4/img_3.png',
            '../../public/img/amsterdam/4/img_4.png',
        ],
        'city': {
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                lat: 52.366021,
                lng: 4.890430,
                zoom: 14
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
            'avatarUrl': '../../public/img/users/avatar-alex.jpg'
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
            '../../public/img/amsterdam/5/img.png',
            '../../public/img/amsterdam/5/img_1.png',
            '../../public/img/amsterdam/5/img_2.png',
            '../../public/img/amsterdam/5/img_3.png',
            '../../public/img/amsterdam/5/img_4.png',
            '../../public/img/amsterdam/5/img_5.png'
        ],
        'city': {
            'title': 'Amsterdam',
            'zoom': 13,
            'location': {
                'id': '1',
                'title': 'Amsterdam',
                lat: 52.366021,
                lng: 4.890430,
                zoom: 14
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
            'avatarUrl': '../../public/img/users/avatar-alex2.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 5.0,
        'bedrooms': 4,
        'maxAdults': 8,
        'neighbors': ['2', '3', '4']
    },
    // Paris offers
    {
        'id': '6',
        'title': 'Charming Parisian Studio',
        'description': 'Beautiful studio in the heart of Montmartre with view of Sacré-Cœur. Perfect for romantic getaways',
        'type': 'studio',
        'price': 320,
        'images': [
            '../../public/img/paris/1/img.png',
            '../../public/img/paris/1/img_1.png',
            '../../public/img/paris/1/img_2.png',
            '../../public/img/paris/1/img_3.png',
        ],
        'city': {
            'title': 'Paris',
            'zoom': 13,
            'location': {
                'id': '2',
                'title': 'Paris',
                'lat': 48.8566,
                'lng': 2.3522,
                'zoom': 12
            }
        },
        'location': {
            'id': '6',
            'title': 'Paris',
            'lat': 48.8867,
            'lng': 2.3431,
            'zoom': 13
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Kitchenette',
            'Coffee machine',
            'TV',
            'Hair dryer',
            'Iron',
            'Elevator',
            'Balcony',
            'City view'
        ],
        'host': {
            'isPro': true,
            'name': 'Claire',
            'avatarUrl': '../../public/img/users/avatar-alexey.png'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.8,
        'bedrooms': 1,
        'maxAdults': 2,
        'neighbors': ['7', '8']
    },
    {
        'id': '7',
        'title': 'Luxury Apartment near Eiffel Tower',
        'description': 'Elegant apartment with balcony offering stunning views of the Eiffel Tower. Modern amenities and prime location',
        'type': 'apartment',
        'price': 650,
        'images': [
            '../../public/img/paris/2/img.png',
            '../../public/img/paris/2/img_1.png',
            '../../public/img/paris/2/img_2.png',
            '../../public/img/paris/2/img_3.png',
            '../../public/img/paris/2/img_4.png',
        ],
        'city': {
            'title': 'Paris',
            'zoom': 13,
            'location': {
                'id': '2',
                'title': 'Paris',
                'lat': 48.8566,
                'lng': 2.3522,
                'zoom': 12
            }
        },
        'location': {
            'id': '7',
            'title': 'Paris',
            'lat': 48.8584,
            'lng': 2.2945,
            'zoom': 16
        },
        'goods': [
            'Air conditioning',
            'Heating',
            'Wi-Fi',
            'Smart TV',
            'Full kitchen',
            'Dishwasher',
            'Washing machine',
            'Balcony',
            'Elevator',
            'Concierge',
            'Gym access',
            'Parking'
        ],
        'host': {
            'isPro': true,
            'name': 'Pierre',
            'avatarUrl': '../../public/img/users/avatar-alex.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 4,
        'neighbors': ['6', '8']
    },
    {
        'id': '8',
        'title': 'Historic Marais Loft',
        'description': 'Converted 18th-century loft in Le Marais with exposed beams and modern comforts. Steps from the best cafes',
        'type': 'loft',
        'price': 480,
        'images': [
            '../../public/img/paris/3/img.png',
            '../../public/img/paris/3/img_1.png',
            '../../public/img/paris/3/img_2.png',
            '../../public/img/paris/3/img_3.png',
        ],
        'city': {
            'title': 'Paris',
            'zoom': 13,
            'location': {
                'id': '2',
                'title': 'Paris',
                'lat': 48.8566,
                'lng': 2.3522,
                'zoom': 12
            }
        },
        'location': {
            'id': '8',
            'title': 'Paris',
            'lat': 48.8606,
            'lng': 2.3612,
            'zoom': 16
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Full kitchen',
            'Coffee machine',
            'Record player',
            'Art collection',
            'Workspace',
            'High ceilings',
            'Historical features',
            'City view'
        ],
        'host': {
            'isPro': false,
            'name': 'Julien',
            'avatarUrl': '../../public/img/users/avatar-sophie.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.7,
        'bedrooms': 1,
        'maxAdults': 3,
        'neighbors': ['6', '7']
    },
    // Cologne offers
    {
        'id': '9',
        'title': 'Modern Apartment near Cathedral',
        'description': 'Bright and spacious apartment with view of Cologne Cathedral. Perfect for exploring the historic city',
        'type': 'apartment',
        'price': 290,
        'images': [
            '../../public/img/cologne/1/img.png',
            '../../public/img/cologne/1/img_1.png',
            '../../public/img/cologne/1/img_2.png',
            '../../public/img/cologne/1/img_3.png',
        ],
        'city': {
            'title': 'Cologne',
            'zoom': 13,
            'location': {
                'id': '3',
                'title': 'Cologne',
                'lat': 50.9375,
                'lng': 6.9603,
                'zoom': 13
            }
        },
        'location': {
            'id': '9',
            'title': 'Cologne',
            'lat': 50.9413,
            'lng': 6.9583,
            'zoom': 16
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Air conditioning',
            'Kitchen',
            'Coffee machine',
            'TV',
            'Washer',
            'Balcony',
            'Cathedral view',
            'Elevator'
        ],
        'host': {
            'isPro': true,
            'name': 'Thomas',
            'avatarUrl': '../../public/img/users/avatar-max.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.6,
        'bedrooms': 2,
        'maxAdults': 4,
        'neighbors': ['10']
    },
    {
        'id': '10',
        'title': 'Riverside Townhouse',
        'description': 'Charming townhouse on the Rhine river with private garden. Ideal for families and river lovers',
        'type': 'house',
        'price': 380,
        'images': [
            '../../public/img/cologne/2/img.png',
            '../../public/img/cologne/2/img_1.png',
            '../../public/img/cologne/2/img_2.png',
            '../../public/img/cologne/2/img_3.png',
            '../../public/img/cologne/2/img_4.png',
        ],
        'city': {
            'title': 'Cologne',
            'zoom': 13,
            'location': {
                'id': '3',
                'title': 'Cologne',
                'lat': 50.9375,
                'lng': 6.9603,
                'zoom': 13
            }
        },
        'location': {
            'id': '10',
            'title': 'Cologne',
            'lat': 50.9389,
            'lng': 6.9678,
            'zoom': 16
        },
        'goods': [
            'Garden',
            'BBQ',
            'Parking',
            'Wi-Fi',
            'Heating',
            'Full kitchen',
            'Washing machine',
            'Dishwasher',
            'Pet friendly',
            'River view'
        ],
        'host': {
            'isPro': false,
            'name': 'Anna',
            'avatarUrl': '../../public/img/users/avatar-alex2.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 3,
        'maxAdults': 6,
        'neighbors': ['9',]
    },
    // Brussels offers
    {
        'id': '11',
        'title': 'Art Nouveau Apartment',
        'description': 'Stunning Art Nouveau apartment in the heart of Brussels. Original features with modern comforts',
        'type': 'apartment',
        'price': 310,
        'images': [
            '../../public/img/brussel/1/img.png',
            '../../public/img/brussel/1/img_1.png',
            '../../public/img/brussel/1/img_2.png',
            '../../public/img/brussel/1/img_3.png',
        ],
        'city': {
            'title': 'Brussels',
            'zoom': 13,
            'location': {
                'id': '4',
                'title': 'Brussels',
                'lat': 50.8503,
                'lng': 4.3517,
                'zoom': 13
            }
        },
        'location': {
            'id': '11',
            'title': 'Brussels',
            'lat': 50.8486,
            'lng': 4.3524,
            'zoom': 16
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Historical features',
            'Full kitchen',
            'Coffee machine',
            'Art collection',
            'Balcony',
            'High ceilings',
            'Stained glass',
            'City center location'
        ],
        'host': {
            'isPro': true,
            'name': 'Marie',
            'avatarUrl': '../../public/img/users/avatar-alex2.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 4,
        'neighbors': ['12']
    },
    {
        'id': '12',
        'title': 'EU District Modern Loft',
        'description': 'Contemporary loft near European Parliament. Ideal for business travelers and EU enthusiasts',
        'type': 'loft',
        'price': 270,
        'images': [
            '../../public/img/brussel/2/img.png',
            '../../public/img/brussel/2/img_1.png',
            '../../public/img/brussel/2/img_2.png',
            '../../public/img/brussel/2/img_3.png',
            '../../public/img/brussel/2/img_4.png',
        ],
        'city': {
            'title': 'Brussels',
            'zoom': 13,
            'location': {
                'id': '4',
                'title': 'Brussels',
                'lat': 50.8503,
                'lng': 4.3517,
                'zoom': 13
            }
        },
        'location': {
            'id': '12',
            'title': 'Brussels',
            'lat': 50.8397,
            'lng': 4.3754,
            'zoom': 16
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Workspace',
            'Coffee machine',
            'Smart TV',
            'Gym access',
            'Concierge',
            'Parking',
            'Business center'
        ],
        'host': {
            'isPro': false,
            'name': 'Luc',
            'avatarUrl': '../../public/img/users/avatar-alex.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.5,
        'bedrooms': 1,
        'maxAdults': 2,
        'neighbors': ['11',]
    },
    // Hamburg offers
    {
        'id': '13',
        'title': 'Hafencity Waterfront Apartment',
        'description': 'Modern apartment in Hamburg\'s Hafencity with harbor views. Close to Elbphilharmonie',
        'type': 'apartment',
        'price': 350,
        'images': [
            '../../public/img/hamburg/1/img.png',
            '../../public/img/hamburg/1/img_1.png',
            '../../public/img/hamburg/1/img_2.png',
            '../../public/img/hamburg/1/img_3.png',
        ],
        'city': {
            'title': 'Hamburg',
            'zoom': 13,
            'location': {
                'id': '5',
                'title': 'Hamburg',
                lat: 53.545026,
                lng: 9.992176,
                zoom: 15
            }
        },
        'location': {
            'id': '13',
            'title': 'Hamburg',
            'lat': 53.5438,
            'lng': 9.9914,
            'zoom': 16
        },
        'goods': [
            'Water view',
            'Wi-Fi',
            'Heating',
            'Air conditioning',
            'Full kitchen',
            'Balcony',
            'Parking',
            'Gym access',
            'Concierge',
            'Smart TV'
        ],
        'host': {
            'isPro': true,
            'name': 'Hans',
            'avatarUrl': '../../public/img/users/avatar-alex.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7,
        'bedrooms': 2,
        'maxAdults': 4,
        'neighbors': ['14',]
    },
    {
        'id': '14',
        'title': 'Traditional Speicherstadt Warehouse',
        'description': 'Converted historic warehouse in Speicherstadt district. Unique experience in UNESCO World Heritage site',
        'type': 'loft',
        'price': 420,
        'images': [
            '../../public/img/hamburg/2/img.png',
            '../../public/img/hamburg/2/img_1.png',
            '../../public/img/hamburg/2/img_2.png',
            '../../public/img/hamburg/2/img_3.png',
            '../../public/img/hamburg/2/img_4.png',
        ],
        'city': {
            'title': 'Hamburg',
            'zoom': 13,
            'location': {
                'id': '5',
                'title': 'Hamburg',
                lat: 53.545026,
                lng: 9.992176,
                zoom: 15
            }
        },
        'location': {
            'id': '14',
            'title': 'Hamburg',
            'lat': 53.5456,
            'lng': 9.9953,
            'zoom': 16
        },
        'goods': [
            'Historical building',
            'Wi-Fi',
            'Heating',
            'Full kitchen',
            'High ceilings',
            'Original beams',
            'Canal view',
            'Workspace',
            'Unique architecture'
        ],
        'host': {
            'isPro': true,
            'name': 'Friedrich',
            'avatarUrl': '../../public/img/users/avatar-angelina.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 1,
        'maxAdults': 3,
        'neighbors': ['13',]
    },
    // Dusseldorf offers
    {
        'id': '15',
        'title': 'Königsallee Luxury Apartment',
        'description': 'Elegant apartment on famous Königsallee shopping street. Luxury living in Dusseldorf\'s best location',
        'type': 'apartment',
        'price': 390,
        'images': [
            '../../public/img/dusseldorf/1/img.png',
            '../../public/img/dusseldorf/1/img_1.png',
            '../../public/img/dusseldorf/1/img_2.png',
            '../../public/img/dusseldorf/1/img_3.png',
        ],
        'city': {
            'title': 'Dusseldorf',
            'zoom': 13,
            'location': {
                'id': '6',
                'title': 'Dusseldorf',
                lat: 51.2277,
                lng: 6.7735,
                zoom: 14
            }
        },
        'location': {
            'id': '15',
            'title': 'Dusseldorf',
            'lat': 51.2254,
            'lng': 6.7769,
            'zoom': 16
        },
        'goods': [
            'City center',
            'Wi-Fi',
            'Air conditioning',
            'Heating',
            'Full kitchen',
            'Smart TV',
            'Balcony',
            'Elevator',
            'Concierge',
            'Shopping district'
        ],
        'host': {
            'isPro': true,
            'name': 'Klaus',
            'avatarUrl': '../../public/img/users/avatar-alex2.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.8,
        'bedrooms': 2,
        'maxAdults': 4,
        'neighbors': ['16', '17']
    },
    {
        'id': '16',
        'title': 'Media Harbor Loft',
        'description': 'Architectural masterpiece in Media Harbor with Rhine views. Designed by famous architects',
        'type': 'loft',
        'price': 450,
        'images': [
            '../../public/img/dusseldorf/2/img.png',
            '../../public/img/dusseldorf/2/img_1.png',
            '../../public/img/dusseldorf/2/img_2.png',
            '../../public/img/dusseldorf/2/img_3.png',
        ],
        'city': {
            'title': 'Dusseldorf',
            'zoom': 13,
            'location': {
                'id': '6',
                'title': 'Dusseldorf',
                lat: 51.2277,
                lng: 6.7735,
                zoom: 14
            }
        },
        'location': {
            'id': '16',
            'title': 'Dusseldorf',
            'lat': 51.2142,
            'lng': 6.7598,
            'zoom': 16
        },
        'goods': [
            'River view',
            'Architectural design',
            'Wi-Fi',
            'Heating',
            'Full kitchen',
            'Workspace',
            'Balcony',
            'Parking',
            'Gym access',
            'Concierge'
        ],
        'host': {
            'isPro': true,
            'name': 'Eva',
            'avatarUrl': '../../public/img/users/avatar-alexey.png'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 1,
        'maxAdults': 2,
        'neighbors': ['15', '17']
    },
    {
        'id': '17',
        'title': 'Altstadt Traditional House',
        'description': 'Traditional German house in Old Town (Altstadt). Close to breweries and historic sites',
        'type': 'house',
        'price': 320,
        'images': [
            '../../public/img/dusseldorf/3/img.png',
            '../../public/img/dusseldorf/3/img_1.png',
            '../../public/img/dusseldorf/3/img_2.png',
            '../../public/img/dusseldorf/3/img_3.png',
        ],
        'city': {
            'title': 'Dusseldorf',
            'zoom': 13,
            'location': {
                'id': '6',
                'title': 'Dusseldorf',
                lat: 51.2277,
                lng: 6.7735,
                zoom: 14
            }
        },
        'location': {
            'id': '17',
            'title': 'Dusseldorf',
            'lat': 51.2294,
            'lng': 6.7715,
            'zoom': 16
        },
        'goods': [
            'Historical building',
            'Wi-Fi',
            'Heating',
            'Full kitchen',
            'Garden',
            'Traditional decor',
            'Pet friendly',
            'City center',
            'Walking distance to attractions'
        ],
        'host': {
            'isPro': false,
            'name': 'Helga',
            'avatarUrl': '../../public/img/users/avatar-alex2.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.6,
        'bedrooms': 3,
        'maxAdults': 5,
        'neighbors': ['15', '16']
    }
];