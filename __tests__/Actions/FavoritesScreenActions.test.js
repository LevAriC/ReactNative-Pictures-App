import FavoritesScreenActions from '../../Components/Screens/Favorites/FavoritesScreenActions'

it("Testing Action's type", () => {
    expect(FavoritesScreenActions.addToFavorites().type).toMatchSnapshot();
});