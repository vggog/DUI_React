import type {OffersList} from "../../types/offer.ts";
import {CitiesCard} from "../cities-card/cities-card.tsx";
import type {Dispatch, SetStateAction} from "react";

type CitiesCardListProps = {
    offersList: OffersList[];
    setSelectPoint: Dispatch<SetStateAction<string | null>>
};

function CitiesCardList({ offersList, setSelectPoint }: CitiesCardListProps){
    return(
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList, (item) =>
                <CitiesCard
                    key={ item.id }
                    id={ item.id }
                    title={ item.title }
                    type={ item.type }
                    price={ item.price }
                    previewImage={ item.previewImage }
                    isPremium={ item.isPremium }
                    rating={ item.rating }
                    setSelectPoint={setSelectPoint}
                    isFavorite={item.isFavorite}
                />)}
        </div>
    );
}

export { CitiesCardList };
