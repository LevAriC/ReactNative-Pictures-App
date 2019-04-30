import HomeScreenActions from '../../Components/Screens/Home/HomeScreenActions'

it("Testing Action's type", () => {
    expect(HomeScreenActions.toggleView().type).toMatchSnapshot();
    expect(HomeScreenActions.saveLastPicsList().type).toMatchSnapshot();
    expect(HomeScreenActions.updatePicsList().type).toMatchSnapshot();
    expect(HomeScreenActions.saveLastView().type).toMatchSnapshot();
    expect(HomeScreenActions.updatePicsList().type).toMatchSnapshot();
});