import React from "react";
import {
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  Button,
  CardFooter
} from "reactstrap";
import { addToFriends } from "../../actions/friends";
import { connect } from "react-redux";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <CardImg src={user.picture.large} />
        <CardBody>
          <CardTitle>
            <b>
              {user.name.first} {user.name.last}
            </b>
          </CardTitle>
          <CardSubtitle>{user.gender}</CardSubtitle>
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => this.props.ToFriends(user)}
            color="secondary"
            block
          >
            friends!
          </Button>
        </CardFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ToFriends: friends => dispatch(addToFriends(friends))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserCard);
