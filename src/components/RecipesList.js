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

  // Ensures all  the display cards are of same size depending on screen size
  // and the amount of recipes shown at a time.
  fillTheGapFunc = () => { 
    const div = <div key={uuid()} className="card-add card--invis"></div>;
    let numOfRecipes = this.props.recipes.length;
    if (window.innerWidth >= 596 && window.innerWidth <= 870 && numOfRecipes%2 === 0) {
      this.setState(() => ({ 
        filler: [<div key={uuid()} className="card-add card--invis"></div>] 
      }));
    } else if (window.innerWidth > 871 && numOfRecipes%3-1 === 0) {
      this.setState(() => ({ 
        filler: [<div key={uuid()} className="card-add card--invis"></div>] 
      }));
    } else if (window.innerWidth > 871 && numOfRecipes%3 === 0) {
      this.setState(() => ({ 
        filler: [
          <div key={uuid()} className="card-add card--invis"></div>, 
          <div key={uuid()} className="card-add card--invis"></div>
        ] 
    }));
    } else {
      this.setState(() => ({ filler: [] })); 
    }
  };  

  // Run the function on mount and recalculates when window is resized or
  // user inputs data.
  componentDidMount () {
    this.fillTheGapFunc();
    window.addEventListener('resize', this.fillTheGapFunc);
    window.addEventListener('keyup', this.fillTheGapFunc);
  };
  
  // Runs the function after inital mount. Function need to be called everytime
  // user go through react-router Links.
  componentDidUpdate (prevProps) {
    if (this.props.recipes.length !== prevProps.recipes.length) {
      this.fillTheGapFunc();
    }
  };

  componentWillUnmount () {
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
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  recipes: applyFilters(state.recipes, state.filters)
});

export default connect(mapStateToProps)(RecipesList);