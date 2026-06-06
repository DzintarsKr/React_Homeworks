import { useState } from "react";

const ratingList = [
    'https://www.clipartmax.com/png/small/67-676995_5-star-rating-png.png',
    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'
];

function Rating() {
    const [ratingValue, setRatingValue] = useState(0);

    return (
        <div className="rating-container">
            <h3>Текущий рейтинг:</h3>
            <img
                src={ratingList[ratingValue]}
                alt={`Рейтинг ${ratingValue}`}
                className="rating-image"
            />

            <div className="button-group">
                <button className="rating-button" onClick={() => setRatingValue(3)}>Плохо</button>
                <button className="rating-button" onClick={() => setRatingValue(2)}>Приемлемо</button>
                <button className="rating-button" onClick={() => setRatingValue(1)}>Хорошо</button>
                <button className="rating-button" onClick={() => setRatingValue(0)}>Отлично</button>
            </div>
        </div>
    );
}

export default Rating;