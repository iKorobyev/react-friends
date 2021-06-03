import React from "react";
import {
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  Button,
  CardFooter
} from "reactstrap";
import { removeFromFriends } from "../../actions/friends";
import { connect } from "react-redux";

class FriendCard extends React.Component {
  render() {
    const { friend, index } = this.props;
    return (
      <div>
        <CardImg src={friend.picture.large} />
        <CardBody>
          <CardTitle>
            <b>
              {friend.name.first} {friend.name.last}
            </b>
          </CardTitle>
          <CardSubtitle>
            <h6>{friend.gender}</h6>
          </CardSubtitle>
        </CardBody>
        <CardFooter>
          <Button onClick={() => this.props.remove(index)} color="danger" block>
            Remove
          </Button>
        </CardFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispath => {
  return {
    remove: id => dispath(removeFromFriends(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FriendCard);
