import React from 'react'
// import DropDown from './drop_down'
import { Link } from 'react-router-dom';
class CategoriesDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      popupVisible: false
    };

  }
  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }
  
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.handleClick();
  }
  handleSelection(category) {
    console.log(category)
  }
  render() {
    const categoryItems = this.props.categories.map((category) => (
      <li 
          key={category} 
          className="dropdown" 
          onClick={() => (this.handleSelection(category))}>
          <Link to={`/categories/${category}`}>{category}</Link>
      </li>
    )
  )
    return (
      // <DropDown categories={categories}/>
      <div className="dropdown-container" ref={node => { this.node = node; }}>      
        <button type="reset" onClick={this.handleClick}>
          Select a category
        </button>
        {this.state.popupVisible && (
          <ul>{categoryItems}</ul>
         )}
      </div>
    )
  }
}

export default CategoriesDropDown