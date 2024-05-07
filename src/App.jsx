import { Route, Routes } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import Layout from "./components/layout/Layout"
import BlogPage from "./components/blog/BlogPage"
import AuthorPage from "./components/author/AuthorPage"

// import { gql , useQuery } from "@apollo/client"

// const QUERY=gql`
//  query{
//   authors{
//     name
//   }
//  }
// `

function App() {
  
  // const {data}=useQuery(QUERY)
  // console.log(data)

  return (

     <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blogs/:slug" element={<BlogPage/>}/>
        <Route path="/authors/:slug" element={<AuthorPage/>}/>
      </Routes>
     </Layout>
  )
}

export default App
