import { createContext, useState } from "react";

// export const FavoritesContext = createContext({
//     ids: [],
//     addFavorite: (id) => { },
//     removeFavorite: (id) => { }
// });
export const FavoritesContext = createContext();

function FavoritesContextProvider(props) {

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    // const values = {
    //     ids: favoriteMealIds,
    //     addFavorite: addFavorite,
    //     removeFavorite: removeFavorite
    // };

    return <FavoritesContext.Provider value={{ favoriteMealIds, addFavorite, removeFavorite }}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;