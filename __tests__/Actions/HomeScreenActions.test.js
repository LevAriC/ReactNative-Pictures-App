import HomeScreenActions from '../../Components/Screens/Home/HomeScreenActions'

it("Testing Action's type", () => {
    expect(HomeScreenActions.updatePicsList().type).toMatchSnapshot();
    expect(HomeScreenActions.toggleView().type).toMatchSnapshot();
});