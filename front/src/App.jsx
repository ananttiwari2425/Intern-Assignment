import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MainNavigation from './components/MainNavigation'
import Home from './pages/Home'
import Add from './pages/Add'
import View from './pages/View'
import Details from './pages/Details'
import Email from './pages/Email'
import axios from 'axios'


const getAllItems=async()=>{
  let allItems=[]
  await axios.get('http://localhost:3000/allitems').then(res=>{
    allItems=res.data
  })
  return allItems
}

const getItem = async({params})=>{
  let item;
  console.log("Getting item with id:", params.id);

  await axios.get(`http://localhost:3000/item/${params.id}`)
    .then(res => item = res.data);

  return item;
}




// const getFavRecipes=()=>{
//   return JSON.parse(localStorage.getItem("fav"))
// }

// const getMyRecipe=async()=>{
//   let user=JSON.parse(localStorage.getItem("user"))
//   let allRecipes=await getAllRecipes()
//   console.log(allRecipes);
//   return allRecipes.filter(item=>item.createdBy===user._id)
// }

// const getRecipe=async({params})=>{
//   let recipe;
//   await axios.get(`http://localhost:3000/recipe/${params.id}`)
//   .then(res=>recipe=res.data)

//   await axios.get(`http://localhost:3000/user/${recipe.createdBy}`)
//   .then(res=>{
//     recipe={...recipe,email:res.data.email}
//   })

//   return recipe
// }


const router=createBrowserRouter([
   {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>},
    {path:"/addItem",element:<Add/>},
    {path:"/getItems",element:<View/>,loader:getAllItems},
    { path: "/details/:id", element: <Details />, loader: getItem },
    {path:"/email",element:<Email/>},
    // {path:"/recipe/:id",element:<RecipeDetails/>,loader:getRecipe}
   ]}
 
])

export default function App() {
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}