import {useState, useEffect} from 'react';

const useFoods = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
     } , [])
    return [foods]
    
};

export default useFoods;