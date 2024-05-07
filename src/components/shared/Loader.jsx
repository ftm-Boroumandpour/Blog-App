import { TailSpin } from "react-loader-spinner"

function Loader() {
  return (
    <div style={{width:"100%" , heigh:"1000px" , display:"flex" , justifyContent:"center" , padding:"20px"}}>
        <TailSpin width="100" height="100" color="gray" ariaLabel="loading"/>
    </div>
  )
}

export default Loader