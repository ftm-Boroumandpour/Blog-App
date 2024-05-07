import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_AUTHOR_INFO } from "../../graphql/queries"
import { Avatar, Container, Grid, Typography } from "@mui/material"
import CardEL from "../shared/CardEL"

import sanitizeHtml from "sanitize-html"
import Loader from "../shared/Loader"


function AuthorPage() {
    const { slug } = useParams()

    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, { variables: { slug: slug } })
    console.log(data)

    if (loading) return <Loader/>
    if (error) return <h3>Error...</h3>

const {author} =data

    return (
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                    <Avatar src={author.avatar.url} sx={{width:"250px" , height:"250px"}}/>
                    <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
                        {author.name}
                    </Typography>
                    <Typography component="p" variant="h5" color="text.secondary" mt={2}>
                        {author.field}
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <div dangerouslySetInnerHTML={{__html:sanitizeHtml(author.description.html)}}></div>
                </Grid>
                <Grid item xs={12} mt={6}>
                <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
                       مقالات  {author.name}
                </Typography>
                
                <Grid container spacing={2} mt={2}>
                    {author.posts.map(post=>(
                       <Grid item xs={12} sm={6} md={4} key={post.id}>
                         <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
                       </Grid>
                    ))}

                </Grid>

                </Grid>

            </Grid>

        </Container>
    )
}

export default AuthorPage