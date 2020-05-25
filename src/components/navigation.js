import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'


class Navigation extends React.Component {

  
  render() {
    return (
      <div className="menu-container">
        <h4>
          <a data-target="about" onClick={this.onMenuItemClick}>
            About
          </a>
        </h4>
        <h4>
          <a data-target="experience" onClick={this.onMenuItemClick}>
            Experience
          </a>
        </h4>
        <h4>
          <a data-target="blog" onClick={this.onMenuItemClick}>
            Blog
          </a>
        </h4>
        <h4>
          <a data-target="contact" onClick={this.onMenuItemClick}>
            Contact
          </a>
        </h4>
      </div>
    )
  }

  onMenuItemClick({ target }) {
    console.log(target)
    document.getElementById(target.dataset.target).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
}

export default Navigation;