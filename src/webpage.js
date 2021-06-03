import React from "react";

import UsersList from "./components/users/usersList";
import FriendsList from "./components/friends/friendsList";
import { Button } from "reactstrap";
import { usersFetchData } from "./actions/users";
import { connect } from "react-redux";

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <UsersList />
        <FriendsList />
        <Button
          onClick={() =>
            this.props.fetchData("https://randomuser.me/api/?results=10")
          }
          outline
          color="primary"
          size="lg"
          className="load_but"
        >
          load
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(usersFetchData(url))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Webpage);
