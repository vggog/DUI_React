import type {ReviewType} from "../types/reviews.ts";

export const reviews: ReviewType[] = [
    // Отзывы для офферов в Amsterdam (id: 1-5)
    {
        id: 1,
        offerId: "1",
        comment: "Прекрасный домик в тихом районе. Все очень чисто и уютно, хозяева внимательные. Обязательно вернусь!",
        date: "2024-03-15",
        rating: 5,
        user: {
            name: "Анна Петрова",
            avatarUrl: '../../public/img/users/user3.png',
            isPro: true
        }
    },
    {
        id: 2,
        offerId: "1",
        comment: "Хорошее расположение, удобно добираться до центра. Немного тесновато для троих, но в целом отлично.",
        date: "2024-03-10",
        rating: 4,
        user: {
            name: "Иван Сидоров",
            avatarUrl: '../../public/img/users/user7.png',
            isPro: false
        }
    },
    {
        id: 3,
        offerId: "2",
        comment: "Стильный лофт, точно как на фото! Очень понравился дизайн и расположение в центре города.",
        date: "2024-03-12",
        rating: 5,
        user: {
            name: "Мария Иванова",
            avatarUrl: '../../public/img/users/user2.png',
            isPro: true
        }
    },
    {
        id: 4,
        offerId: "3",
        comment: "Уютный коттедж вдали от шума города. Идеальное место для отдыха с семьей или друзьями.",
        date: "2024-03-08",
        rating: 5,
        user: {
            name: "Алексей Смирнов",
            avatarUrl: '../../public/img/users/user5.png',
            isPro: false
        }
    },
    {
        id: 5,
        offerId: "3",
        comment: "Очень атмосферное место, камин создает уют. Не хватало только Wi-Fi в некоторых комнатах.",
        date: "2024-03-05",
        rating: 4,
        user: {
            name: "Ольга Козлова",
            avatarUrl: '../../public/img/users/user1.png',
            isPro: true
        }
    },
    {
        id: 6,
        offerId: "4",
        comment: "Роскошный пентхаус! Вид просто захватывает дух. Все услуги на высшем уровне, как в 5-звездочном отеле.",
        date: "2024-03-18",
        rating: 5,
        user: {
            name: "Дмитрий Волков",
            avatarUrl: '../../public/img/users/user8.png',
            isPro: true
        }
    },
    {
        id: 7,
        offerId: "5",
        comment: "Великолепный вид на город, бассейн и джакузи - просто сказка! Цена соответствует качеству.",
        date: "2024-03-14",
        rating: 5,
        user: {
            name: "Екатерина Новикова",
            avatarUrl: '../../public/img/users/user4.png',
            isPro: true
        }
    },

    // Отзывы для офферов в Paris (id: 6-8)
    {
        id: 8,
        offerId: "6",
        comment: "Очаровательная студия в самом сердце Монмартра. Вид на Сакре-Кёр каждое утро - это волшебно!",
        date: "2024-03-20",
        rating: 5,
        user: {
            name: "София Дюпон",
            avatarUrl: '../../public/img/users/user6.png',
            isPro: true
        }
    },
    {
        id: 9,
        offerId: "7",
        comment: "Апартаменты с потрясающим видом на Эйфелеву башню! Все современно, чисто и очень удобно.",
        date: "2024-03-17",
        rating: 5,
        user: {
            name: "Мишель Леблан",
            avatarUrl: '../../public/img/users/user9.png',
            isPro: false
        }
    },
    {
        id: 10,
        offerId: "8",
        comment: "Исторический лофт с характером. Очень атмосферно, но лестница немного крутая для чемоданов.",
        date: "2024-03-13",
        rating: 4,
        user: {
            name: "Жан-Пьер Мартен",
            avatarUrl: '../../public/img/users/user3.png',
            isPro: true
        }
    },

    // Отзывы для офферов в Cologne (id: 9-10)
    {
        id: 11,
        offerId: "9",
        comment: "Отличная квартира с видом на собор. Очень чисто и современно, удобное расположение.",
        date: "2024-03-19",
        rating: 5,
        user: {
            name: "Томас Мюллер",
            avatarUrl: '../../public/img/users/user2.png',
            isPro: true
        }
    },
    {
        id: 12,
        offerId: "10",
        comment: "Прекрасный домик на берегу Рейна. Сад просто великолепен, идеально для семейного отдыха.",
        date: "2024-03-16",
        rating: 5,
        user: {
            name: "Клаудия Шмидт",
            avatarUrl: '../../public/img/users/user7.png',
            isPro: false
        }
    },

    // Отзывы для офферов в Brussels (id: 11-12)
    {
        id: 13,
        offerId: "11",
        comment: "Квартира в стиле ар-нуво - просто произведение искусства! Историческая атмосфера и современный комфорт.",
        date: "2024-03-21",
        rating: 5,
        user: {
            name: "Люк Деветер",
            avatarUrl: '../../public/img/users/user5.png',
            isPro: true
        }
    },
    {
        id: 14,
        offerId: "12",
        comment: "Удобный лофт для деловой поездки. Рядом с Европарламентом, все необходимое для работы есть.",
        date: "2024-03-22",
        rating: 4,
        user: {
            name: "Анна Вандерсен",
            avatarUrl: '../../public/img/users/user1.png',
            isPro: false
        }
    },

    // Отзывы для офферов в Hamburg (id: 13-14)
    {
        id: 15,
        offerId: "13",
        comment: "Современная квартира с видом на гавань. Отличное расположение, рядом с Эльбской филармонией.",
        date: "2024-03-25",
        rating: 5,
        user: {
            name: "Ханс Грюбер",
            avatarUrl: '../../public/img/users/user4.png',
            isPro: true
        }
    },
    {
        id: 16,
        offerId: "13",
        comment: "Хорошие апартаменты, но парковка могла бы быть поближе. В остальном все отлично.",
        date: "2024-03-24",
        rating: 4,
        user: {
            name: "Петра Вайс",
            avatarUrl: '../../public/img/users/user8.png',
            isPro: false
        }
    },
    {
        id: 17,
        offerId: "14",
        comment: "Уникальный опыт проживания в историческом складе! Атмосфера непередаваемая, вид на каналы.",
        date: "2024-03-23",
        rating: 5,
        user: {
            name: "Фридрих Браун",
            avatarUrl: '../../public/img/users/user6.png',
            isPro: true
        }
    },

    // Отзывы для офферов в Dusseldorf (id: 15-17)
    {
        id: 18,
        offerId: "15",
        comment: "Роскошные апартаменты на Кё! Идеальное расположение для шопинга и прогулок по городу.",
        date: "2024-03-28",
        rating: 5,
        user: {
            name: "Клаус Хоффман",
            avatarUrl: '../../public/img/users/user3.png',
            isPro: true
        }
    },
    {
        id: 19,
        offerId: "16",
        comment: "Архитектурный шедевр в Медиа-гавани! Дизайн потрясающий, виды на Рейн невероятные.",
        date: "2024-03-27",
        rating: 5,
        user: {
            name: "Ева Шульц",
            avatarUrl: '../../public/img/users/user9.png',
            isPro: false
        }
    },
    {
        id: 20,
        offerId: "16",
        comment: "Очень стильный лофт, но для двух человек маловат. Больше подходит для одного.",
        date: "2024-03-26",
        rating: 4,
        user: {
            name: "Маркус Вебер",
            avatarUrl: '../../public/img/users/user2.png',
            isPro: true
        }
    },
    {
        id: 21,
        offerId: "17",
        comment: "Традиционный немецкий дом в Альтштадте. Атмосфера настоящей Германии, рядом пивные!",
        date: "2024-03-29",
        rating: 5,
        user: {
            name: "Гельга Майер",
            avatarUrl: '../../public/img/users/user7.png',
            isPro: false
        }
    },
    {
        id: 22,
        offerId: "17",
        comment: "Уютный дом, но в старом здании немного прохладно. Обогреватель помог, но лучше утеплить окна.",
        date: "2024-03-30",
        rating: 4,
        user: {
            name: "Вольфганг Кляйн",
            avatarUrl: '../../public/img/users/user5.png',
            isPro: true
        }
    }
];