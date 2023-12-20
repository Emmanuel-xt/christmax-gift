// import UsersList from '@components/UserList'
import AddItems from '@components/AddItems'
import AvailableItems from "@components/AvailableItems";
import UsersFeed from "@components/UsersFeed";

const AppPage = () => {
  return (
    <div>
      App Page
      <div className="">
        <h1 className="">Registered Users are</h1>
        <UsersFeed />
      </div>

      <div className="">
        <h1>Available Gifts Are</h1>
        <AvailableItems />
      </div>
      {/* <AddItems /> */}
    </div>
  );
};

export default AppPage;
