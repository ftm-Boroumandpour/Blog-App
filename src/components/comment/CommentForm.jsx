/* eslint-disable react/prop-types */
import { useMutation } from "@apollo/client"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { SEND_COMMENT } from "../../graphql/mutations"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CommentForm({slug}) {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [text, setText]=useState("")

  

  const [sendComment , {loading , data, error}]=useMutation(SEND_COMMENT , {
    variables:{
      name:name , email:email , text:text , slug:slug
    }
  })


  const sendHandler=()=>{
    if (name && email && text){
      sendComment()

      // {data ? (toast.success("پیام ارسال شد و منتظر تایید می باشد" , {
      //   position: "top-center"
      // })) : null}
      // {error ? (toast.error("ارسال پیام با خطا مواجه شد" , {
      //   position: "top-center"
      // })) : null}
      //باید آسنکرون نوشته بشه کخ ننوشتم
      
    }else{
      toast.warn("لطفا تمام فلید ها را پر کنید." ,{
        position: "top-center"
      })
    }
  }

  console.log({loading , data , error})

  if(data){toast.success("پیام ارسال شد و منتظر تایید می باشد" , {
    position: "top-center"
  }) }
  if(error){toast.error("ارسال پیام با خطا مواجه شد" , {
    position: "top-center"
  } ) }




  return (
    <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius:4 , py:1 , mt:4}}>
        <Grid item xs={12} m={2}>
          <Typography component="p" variant="h6" fontWeight={700} color="primary">
            فرم ارسال کامنت
          </Typography>
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField label="نام کاربری" variant="outlined" sx={{width:"100%"}}
                value={name} onChange={(e)=>setName(e.target.value)} />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField label="ایمیل" variant="outlined" sx={{width:"100%"}}
                value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField label="متن کامنت" variant="outlined" sx={{width:"100%"}}
                value={text} onChange={(e)=>setText(e.target.value)}
                multiline minRows={4} />
        </Grid>
        <Grid item xs={12} m={2}>
         {loading ? ( <Button variant="contained" disabled>در حال اسال...</Button>)
         : ( <Button variant="contained" onClick={sendHandler}>ارسال پیام</Button>)}
        </Grid>
        <ToastContainer/>
    </Grid>
  )
}

export default CommentForm