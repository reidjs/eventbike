import { fetchCategories } from '../../util/events_api_util';
import React from 'react';

class SplashCategoryGrid extends React.Component {  
  constructor (props) {
    super(props);
    this.state = {categories: []}
    // this.redirectUser = this.redirectUser.bind(this);
  }
  componentWillMount() {
    fetchCategories()
      .then(res => {
        const categories = res.category_with_image
        this.setState({categories})
      })
  }
  render() {
    const categoryItems = this.state.categories.map((category) => {
      return (
        <div className="photo-item">
          <img className="cat-img" src={category[1]}/>
          <div className="category-item">{category[0]}</div>
        </div>
      )
    });
    return (
      <div className="category-grid-container">
        <div className="category-grid">{categoryItems}</div>
      </div>
    )
  }
}

export default SplashCategoryGrid;