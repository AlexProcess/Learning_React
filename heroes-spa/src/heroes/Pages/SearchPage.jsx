import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../../Hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../../auth/components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const {q = ''} = queryString.parse(location.search)
    const heroes = getHeroesByName(q)
    
    const {searchText, onInputChange} = useForm({
        searchText: '',
    })

    const onSearchSubmmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 1) return;
        
        navigate(`/search/?q=${searchText.toLowerCase().trim()}`);
    }
    
    return (
        <>
            <h1>SearchPage</h1>
            <hr/>
            <div className="row">

            <div className="col-5">
                <h4>Searching</h4>
                <hr/>
                <form onSubmit={onSearchSubmmit}>
                    <input 
                    type="text"
                    placeholder="Search a hero"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={onInputChange}
                    />
                    <button className="btn btn-outline-primary mt-3">Search</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>
                <div className="alert alert-primary">
                    Search a hero
                </div>
                <div className="alert alert-danger">
                    No hero with <b>{q}</b>
                </div>
                {
                    heroes.map(hero => (
                        <HeroCard 
                        key={hero.id} 
                        {...hero} />
                    ))
                }
            </div>
            </div>            
        </>
    );
};
