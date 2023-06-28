import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {
    const {id, ...rest} = useParams();
    const hero = getHeroById(id);

    console.log(hero)

    if (!hero ) {
        <Navigate to={"marvel"} />
    }

    return (
        <>
            <h1>{hero.superhero}</h1>
        </>
    );
};
