import useHttp from "./hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";
const requestConfig={};

export default function DisplayProducts() {
    const {data,loading,error,sendRequest}=useHttp('http://localhost:3000/meals',requestConfig,[]);

    if(loading){
        return <p className="center">Fetching meals</p>
    }
    if(error){
        return <Error title="Failed to fetch meals" message={error}></Error>
    }
    
    return (<ul id="meals">
        {data && data.map((meal) => (
            <MealItem key={meal.id} meal={meal}></MealItem>
        ))}
    </ul>);
}