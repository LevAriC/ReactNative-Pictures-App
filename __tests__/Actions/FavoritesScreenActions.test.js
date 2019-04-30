import FavoritesScreenActions from '../../Components/Screens/Favorites/FavoritesScreenActions'

it("Testing Action's type", () => {
    expect(FavoritesScreenActions.addToFavorites().type).toMatchSnapshot();
    expect(FavoritesScreenActions.changeView().type).toMatchSnapshot();
    expect(FavoritesScreenActions.saveBigPic().type).toMatchSnapshot();
});