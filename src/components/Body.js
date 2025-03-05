import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";
import { Link } from "react-router";
import userOnlineStatus from "../utils/userOnlineStatus";

const Body=()=>{
    const [listOfRestaurants,setListofRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")
    useEffect(()=>{
        fetchData();
    },[])
const fetchData=async()=>{
   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
   const json=await data.json();
setListofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

};
const onlineStatus=userOnlineStatus();
if(onlineStatus===false) return <h1>You are offline Now...!!! plz check u r internet connection</h1>
    ///conditional rendering////////

    return (
        <div className="body">
            <div className="filter1">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input></div>
                    <button className="search-btn" onClick={()=>{
                        const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log(filteredRestaurant)
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
            </div>
       <div className="filter">
      <button className="filter-btn" onClick={()=>{const filteredList=listOfRestaurants.filter(res=>res.info.avgRating>4.4)
                      setListofRestaurants(filteredList);
        }}>
        Top Rated Restaurant
        </button>
       </div>

       <div className="res-container">
     {filteredRestaurant.map((restaurant)=>(<Link key={restaurant?.info?.id} to={"/restaurant/menu/"+restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>))}
        </div> 
        </div>

    )
};

export default Body;