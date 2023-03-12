import classes from './JoinUsComponent.module.css';
import React, {useState} from "react";

const JoinUsItemsForm = () => {

  const[name, setName] = useState();
  const[email, setEmail] = useState();
  const[phone, setPhone] = useState();
  const[linkedin_id, setLinkedin_id] = useState();
  const status="new";

  async function onSubmitHandler(event){
      event.preventDefault();
      const item = {name,email,phone,linkedin_id,status};

          const result = await fetch("https://salty-ravine-75208.herokuapp.com/v3/WebsiteContent/investor-form/",{
             method:'POST',
             headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
             },
             body:JSON.stringify(item)
           });

           const data = await result.json();
           if(data.created_at) alert("Registered Successfully")

  }

    return(
      <div className={classes.join_us_form}>
         <form onSubmit={onSubmitHandler}>
            <div className={classes.join_us_form_com}>
                <div className={classes.form_div}>
                  <input required type = "text" name = "name" className={classes.join_us_form_input} onChange={(e)=>setName(e.target.value)}/>
                  <label className={classes.input_text}>Name*</label>
                </div>
                <div className={classes.form_div}>
                  <input required type = "email" name = "email" className={classes.join_us_form_input} onChange={(e)=>setEmail(e.target.value)}/>
                  <label className={classes.input_text}>Email Id*</label>
                </div>
            </div>
            <div className={classes.join_us_form_com}>
                <div className={classes.form_div}>
                  <input required type = "number" name = "phonenumber"className={classes.join_us_form_input} onChange={(e)=>setPhone(e.target.value)}/>
                  <label className={classes.input_text}>Phone Number*</label>
                </div>
                <div className={classes.form_div}>
                  <input required type = "text" name = "linkedin"className={classes.join_us_form_input} onChange={(e)=>setLinkedin_id(e.target.value)}/>
                  <label className={classes.input_text}>LinkedIn ID*</label>
                </div>
            </div>
            <div>
               <center><button className={classes.join_us_form_btn2}>Join Us</button></center>
            </div>
          </form>
      </div>
    );
};
export default JoinUsItemsForm;
