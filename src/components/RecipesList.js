/*
 * Renders each recipe item on the list. 
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PlusIcon from 'react-icons/lib/fa/plus-circle';
import applyFilters from '../selectors/recipes';
import RecipeDisplayCard from './RecipeDisplayCard';
 
class RecipesList extends React.Component {
  state = { 
    filler: []
  };
  fillTheGapFunc = () => { 
    const div = <div key={uuid()} className="card-add card--invis"></div>;
    let numOfRecipes = this.props.recipes.length;
    if (window.innerWidth >= 596 && window.innerWidth <= 870 && numOfRecipes%2 === 0) {
      this.setState(() => ({ filler: [div] }));
    } else if (window.innerWidth > 871 && numOfRecipes%3-1 === 0) {
      this.setState(() => ({ filler: [div] }));
    } else if (window.innerWidth > 871 && numOfRecipes%3 === 0) {
      this.setState(() => ({ filler: [div, div] }));
    } else {
      this.setState(() => ({ filler: [] })); 
    }
  };  
  componentDidMount () {
    this.fillTheGapFunc();
    window.addEventListener('resize', this.fillTheGapFunc);
    window.addEventListener('keyup', this.fillTheGapFunc);
  };
  componentWillMount () {
    window.removeEventListener('resize', this.fillTheGapFunc);
    window.removeEventListener('keyup', this.fillTheGapFunc);
  };
  render() {
    return (
      <div className="content-container">
        <div className="list-body">
          {this.props.recipes.map((recipe) => (
            <RecipeDisplayCard key={uuid()} recipe={recipe}/>
          ))}
          <Link className="card-add" to="/create">
            <PlusIcon size={96} />
          </Link>          
          {this.state.filler.map(div => div)}
        </div>  
        {console.log(this.state.filler)}
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  recipes: applyFilters(state.recipes, state.filters)
});

export default connect(mapStateToProps)(RecipesList);