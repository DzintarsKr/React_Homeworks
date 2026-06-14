import "./CityCard.css";

function CityCard({city}) {
    if (!city) {
        return <p>Выберите город из списка.</p>;
    }

    return (
        <div className="card">
            
            <h2>{city.name}</h2>
            <img src={city.imageUrl} alt={city.name} />
            
            <p>{city.description}</p>
            <h3>Интересные факты:</h3>

            <ul>
                {city.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>

        </div>
    );
    
}

export default CityCard;