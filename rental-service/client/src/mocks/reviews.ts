import type {ReviewType} from "../types/reviews.ts";


export const reviews: ReviewType[] = [
    {
        id: 1,
        offerId: "2",
        comment: "Отличное место для отдыха! Прекрасный вид из окна и уютная атмосфера. Обязательно вернусь снова.",
        date: "2024-03-15",
        rating: 5,
        user: {
            name: "Анна Петрова",
            avatarUrl: "https://example.com/avatars/anna.jpg",
            isPro: true
        }
    },
    {
        id: 2,
        offerId: "2",
        comment: "Хорошие апартаменты, но немного шумно по вечерам. В целом остался доволен.",
        date: "2024-03-10",
        rating: 4,
        user: {
            name: "Иван Сидоров",
            avatarUrl: "https://example.com/avatars/ivan.jpg",
            isPro: false
        }
    },
    {
        id: 3,
        offerId: "1",
        comment: "Прекрасное расположение, всё чисто и аккуратно. Хозяин очень отзывчивый!",
        date: "2024-03-05",
        rating: 5,
        user: {
            name: "Мария Иванова",
            avatarUrl: "https://example.com/avatars/maria.jpg",
            isPro: true
        }
    }
];