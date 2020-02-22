import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

//make button that shows only remote employees
//const remote = friends.filter(friend => friend.remote !== "no");
//console.log(remote)
//make button that orders employees by salary

class App extends Component {
  state = {
    friends
  };

  remoteEmployee = id => {
    const friends = this.state.friends.filter(friend => friend.remote !== "no");
    this.setState({ friends });
  };
  sortEmployee = id => {
    function compare(a, b){
      const payA = a.pay;
      const payB = b.pay;
      let comparison = 0;
      if (payA < payB) {
        comparison = 1;
      } else if (payA > payB) {
        comparison = -1;
      }
      return comparison;
    }
    friends.sort(compare);
    this.setState({ friends });
  };

  render() {
    return (
      <Wrapper>
        <Title
        remoteEmployee={this.remoteEmployee}
        sortEmployee = {this.sortEmployee}
         />
        {this.state.friends.map(friend => (
          <FriendCard
            {...friend}
            key={friend.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

