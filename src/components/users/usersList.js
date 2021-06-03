import React from "react";
import { connect } from "react-redux";
import Preloader from "../preloader";
import { CardDeck, Card, Col } from "reactstrap";
import UserCard from "./userCard";

class UsersList extends React.Component {
  render() {
    if (this.props.hasErrored) {
      return console.log("Opps! Something went wrong");
    }
    if (this.props.isLoading) {
      return <Preloader />;
    }
    return (
      <CardDeck>
        {this.props.users.map((user, index) => {
          return (
            <Col sm="2">
              <Card body className="crd text-center" key={index}>
                <UserCard user={user} />
              </Card>
            </Col>
          );
        })}
      </CardDeck>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    hasErrored: state.usersHasErrored,
    isLoading: state.usersIsLoading
  };
};

export default connect(mapStateToProps)(UsersList);
