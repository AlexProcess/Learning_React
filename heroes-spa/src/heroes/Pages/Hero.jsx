import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const Hero = () => {
    const {id, ...rest} = useParams();

    const hero = useMemo(() => getHeroById(id), [id]) 

    const navigate = useNavigate()
    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!hero ) {
        <Navigate to={"/marvel"} />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumnail"></img>
                <h3>{hero.superhero}</h3>
                <ul>
                    <li>
                        <b>Alter ego: </b>{hero.alter_ego}
                    </li>
                    <li>
                        <b>Publisher: </b>{hero.publisher}
                    </li>
                    <li>
                        <b>First appearence: </b>{hero.first_appearance}
                    </li>
                    <li>
                        <b>First appearence: </b>{hero.first_appearance}
                    </li>
                </ul>
                <h5 className="mt-3">Characers</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-primary" onClick={onNavigateBack}>Regresar</button>
            </div>
        </div>
    );
};
