import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList(props) {
    return (
        <ul>
            <FoodListItem name={'bread'} count={10} />
            <FoodListItem name={'Egg'} count={20} />
            <FoodListItem name={'Milk'} count={5} />
        </ul>
    );
}

export default FoodList;