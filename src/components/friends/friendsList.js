import React from "react";
import { CardDeck, Card, Col } from "reactstrap";
import FriendCard from "./friendCard";
import { connect } from "react-redux";

class FriendsList extends React.Component {
  render() {
    console.log(this.props.friends);
    if (!this.props.friends) {
      return null;
    }
    return (
      <CardDeck>
        {this.props.friends.map((friend, index) => {
          return (
            <Col key={index + 10} md="2">
              <Card
                body
                className="crd text-center"
                key={index}
                body
                outline
                color="primary"
              >
                <FriendCard friend={friend} index={index} />
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
    friends: state.addToFriends
  };
};

export default connect(mapStateToProps)(FriendsList);
