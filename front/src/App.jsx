import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MainNavigation from './components/MainNavigation'
import Home from './pages/Home'
import Add from './pages/Add'
import View from './pages/View'
import Details from './pages/Details'
import axios from 'axios'


const getAllItems=async()=>{
  let allItems=[]
  await axios.get('http://localhost:3000/allitems').then(res=>{
    allItems=res.data
  })
  return allItems
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
    {path:"/details",element:<Details/>},
    // {path:"/editRecipe/:id",element:<EditRecipe/>},
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