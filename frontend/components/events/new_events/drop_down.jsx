import React from 'react'
import DropDownListItem from './drop_down_list_item'
class DropDown extends React.Component {
  constructor(props) {
    super(props);

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
    this.props.handleCategory(category)
  }

  render() {
    const categoryItems = this.props.categories.map((category) => (
        <li 
            key={category} 
            className="dropdown" 
            onClick={() => (this.handleSelection(category))}>
              <DropDownListItem 
                category={category}/>
        </li>
      )
    )

    return (
      <div className="dropdown-container" ref={node => { this.node = node; }}>
        <button type="reset" onClick={this.handleClick}>
          Select a category
        </button>
        {this.state.popupVisible && (
          <ul>{categoryItems}</ul>
         )}
      </div>
    );
  }
}
export default DropDown;