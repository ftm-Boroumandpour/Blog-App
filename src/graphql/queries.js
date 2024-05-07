import { gql } from "@apollo/client";



const GET_BLOGS_INFO = gql`
  query {
    posts {
    id
    slug
    coverPhoto {
      url
    }
    title
    author {
      avatar {
        url
      }
      name
    }
  }
  }
`
const GET_AUTHORS_INFO = gql`
  query {
    authors {
     avatar {
      url
     }
     id
     name
     slug
   }
  }
`
const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug:String!) {
    author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
  }
`

const GET_POST_INFO = gql`
   query getpost($slug:String!) {
     post(where: {slug: $slug}) {
      author {
        avatar {
          url
        }
        name
        field
      }
      coverPhoto {
        url
      }
      title
      content {
        html
      }
   }
 }
`

const GET_POST_COMMENTS=gql`
  query getPostComments($slug:String!){
    comments(where: {post: {slug: $slug}}) {
      id
      text
      name
    }
 }
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO , GET_POST_INFO , GET_POST_COMMENTS}