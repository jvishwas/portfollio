import React,{useState} from "react";
import "./contact.css";

export default function Contact() {
const [state,setState]=useState({fname:"",lname:"", email:"",mobile:"",chat:""})

const InpData=(e)=>{
  setState({...state,[e.target.name]:e.target.value})
  console.log(state)
}
  const DataSend=(e)=>{
    // e.preventDefault()
    const {email,mobile}=state;

    // simple validation must be filled up
    if(email===""){
      alert("It's must be filled up");
    }else if(mobile===""){
      alert("It's must be filled up");
    }
    else{
        alert("Data has been Sent! He will Contact you Thank You.")
    }
    
    // alert("Data has been Sent! He will Contact you Thank You.")

  }
  return (
    <>
    <h1 className="p-5 text-white text-center text-decoration-underline" data-aos="fade-down">Contact us</h1>
      <div className="row row-cols-auto" id="contact_main">
        <div className="col col-sm-12 col-md-6 ">
          <div id="contact_img" data-aos="fade-right">
            <img src='./assets/img/c5.gif' alt="not found"/>
            </div>
        </div>
        {/* /* Contact page Riht Side */ }
        <div className="col pt-1 pb-3" id="contact_right">
          <h1 className="text-center pt-5 text-white" data-aos="zoom-in">Get in Touch</h1>
          <form className="ps-5 pe-2" id="Contact_form" data-aos="fade-left">
            <div className="row input-group">
              <label forhtml="">Full Name</label>
            <input type="text" onChange={InpData} name="fname" value={state.fname} className="form-control" placeholder="First Name" required/>
            <input type="text" onChange={InpData} name="lname" value={state.lname} className="form-control ms-2" placeholder="Last Name" />

            </div>
            <div className="row">
              <label forhtml="">Emai Id</label>
            <input type="email" onChange={InpData} name="email" value={state.email} className="form-control " placeholder="Email id here.." required/>
            </div>
            <div className="row">
              <label forhtml="">Contact No</label>
            <input type="text" onChange={InpData} name="mobile" value={state.mobile} className="form-control " placeholder="Contact No here.." required/>
            </div>
            <div className="row">
            <label forhtml="">Chat's Here..</label>
              <textarea onChange={InpData} name="chat" value={state.chat} className="form-control" rows="5" cols="10"  placeholder="Leave message here.." style={{resize:"none" }}></textarea>
            </div>
            <div className="row mt-3">
            <button id="sumit_btn" onClick={DataSend} style={{width:"10rem",height:"3rem",background:"rgb(22,163,74)",color:"white",fontSize:"1.4rem",border:"none",borderRadius:"10px"}}>Submit</button>
            </div>
            
          </form>
        </div>
        
      </div>
    </>
  );
  }
