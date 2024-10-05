import React from 'react'
import {BrowserRouter as Router,Route, BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Join } from './components/Join/Join';
import { Chat } from './components/Chat/Chat';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Join/>
  },
  {
    path:'/chat',
    element:<Chat/>
  }
])


function App() {
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;




