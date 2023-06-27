import { getHeroesByPublisher } from "../../heroes/helpers";

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);

    return (
        <div>
            <h1>Lista de Héroes</h1>
            <ul>
                {heroes.map((hero) => (
                    <li key={hero.id}>{hero.superhero}</li>
                ))}
            </ul>
        </div>
    );
};
