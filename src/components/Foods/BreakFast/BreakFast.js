import React from 'react';
import { Row } from 'react-bootstrap';
import useFoods from '../../../hooks/useFoods'
import FoodItem from '../FoodItem/FoodItem';
const BreakFast = ({menu}) => {
    const [foods] = useFoods()
    return (
        <Row>
            {
                foods.filter((item) => menu===item.type).map(food => 
                    <FoodItem 
                    key={food.id}
                    {...food}></FoodItem>
                )
            }
        </Row>
    );
}

export default BreakFast;