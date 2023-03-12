import classes from './ContactUsForm.module.css';
import React, {useState} from "react";

const ContactUsForm = () =>{

  const[name, setName] = useState();
  const[email, setEmail] = useState();
  const[subject, setSubject] = useState();
  const[message, setMessage] = useState();
  const status = "new";

  async function onSubmitHandler(event){
      event.preventDefault();
      const item = {name,email,subject,message,status};

          const result = await fetch("https://salty-ravine-75208.herokuapp.com/v3/WebsiteContent/contact-form/",{
             method:'POST',
             headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
             },
             body:JSON.stringify(item)
           });

           const data = await result.json();
           if(data) alert("Thank you, We get back to your message")


  }

    return(
      <div className={classes.contact_form}>
           <h1>Send Your Queries</h1>
           <form className={classes.contact_form_details} onSubmit={onSubmitHandler}>

              <input type = "text" name = "name" placeholder="Enter Your Name" className={classes.contact_input} onChange={(e) => setName(e.target.value)}/>
              <input type = "email" name = "email" placeholder="Enter Your Email id" className={classes.contact_input} onChange={(e) => setEmail(e.target.value)}/>
              <input type = "text" name = "subject" placeholder="Subject" className={classes.contact_input} onChange={(e) => setSubject(e.target.value)}/>
              <textarea className={classes.contact_textarea} placeholder="Write Your Message..." onChange={(e) => setMessage(e.target.value)}></textarea>
              <button className={classes.contact_us_btn}>Submit</button>
           </form>
       </div>
    );
};
export default ContactUsForm;
