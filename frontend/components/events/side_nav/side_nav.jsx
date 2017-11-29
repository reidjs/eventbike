import React from 'react';
import CategoriesDropDown from './categories_drop_down';
import { fetchCategories } from '../../../util/events_api_util';
class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categories: []}
  }
  componentWillMount() {
    fetchCategories()
      .then(res => {
        const categories = res.categories;
        // console.log(categories);
        this.setState({categories})
      })
  }
  render() {
    return (
      <div className="events-sidenav">side nav here
        <CategoriesDropDown categories={this.state.categories} />
      </div>
    )
  }
}

export default SideNav;