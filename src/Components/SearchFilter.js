import { useState } from "react"


export default function SearchFilter(){

    const [query, setQuery] = useState("");
    const cities = ["Bikaner","Jodhpur","Jaisalmer","Barmer"];
    const [filter_arr, setFilterArr] = useState([]);
    // let filter_arr = [];

    function handleChange(event){
        setQuery(event.target.value);

        setFilterArr(cities.filter(search_fun));
        console.log(filter_arr);
    }

    function search_fun(city){
        return (query.includes(city))
    }
    return <>

        <h1>Hello, Everyone</h1>
        
        <input type="text" placeholder="Search" value={query} onChange={handleChange}/>
        {
            filter_arr.map((city)=>{
                return <p>{city}</p>
            })
        }
    </>
}