import React from "react";
import FontAwesome from "react-fontawesome";
import './_navigation.scss';

interface INavItems {
  name: string;
  id: number;
  icon: string;
}

export default class Navigation extends React.Component {
  private readonly navItems: Array<INavItems> = [
    {
      name: "Home",
      id: 1,
      icon: "home"
    },
    {
      name: "Profile",
      id: 2,
      icon: "user-o"
    },
    {
      name: "About",
      id: 3,
      icon: "question-circle"
    },
    {
      name: "Settings",
      id: 4,
      icon: "cog"
    }
  ];
  
  render() {
    return (
      <nav className="navigation">
        <ul>
          {this.navItems.map(item => {
            return (
              <li key={item.id}>
                <FontAwesome name={item.icon} />
                <a href="#">{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
