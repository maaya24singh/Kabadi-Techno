import classes from './JoinUsComponent.module.css';
import React, {useState, useRef} from "react";

const JoinUsItemsForm = (props) => {
    const id = props.selectId;
    const file = useRef();

    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[phone, setPhone] = useState();
    const[linkedin_id, setLinkedin_id] = useState();
    const[domain, setDomain] = useState();
    const status = "new";
    const[cv, setCv] = useState(null);

    function handleFile(e){
      let file = e.target.files[0];
      setCv(file);

    }

    async function onSubmitHandler(event){
        event.preventDefault();

        let file = cv;
        console.log(file);
        //const item = {name,email,phone,domain,linkedin_id,file};
        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('email',email);
        formdata.append('phone',phone);
        formdata.append('domain',domain);
        formdata.append('linkedin_id',linkedin_id);
        formdata.append('cv',file);


        console.log(formdata)

        if(id === 'i1'){
            let result = await fetch("https://salty-ravine-75208.herokuapp.com/v3/WebsiteContent/intern-form/",{
               method:'POST',
               body:formdata
             }).then((response) => response.json())
        			.then((result) => {
        				console.log('Success:', result);
                alert("Successfully Resgistered as a Intern");
        			})
        			.catch((error) => {
        				console.error('Error:', error);
                alert("Please fill the form properly")
        			});
         }
         else{
             let result = await fetch("https://salty-ravine-75208.herokuapp.com/v3/WebsiteContent/mentor-form/",{
                method:'POST',
                body:formdata
              }).then((response) => response.json())
              .then((result) => {
                console.log('Success:', result);
                 alert("Successfully Resgistered as a Mentor");
              })
              .catch((error) => {
                console.error('Error:', error);
                 alert("Please fill the form properly")
              });
         }

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
            <div className={classes.join_us_form_com}>
                <div className={classes.join_us_form_select_div}>
                  {id === 'i1'?
                     (<select className={classes.join_us_form_select} onChange={(e)=>setDomain(e.target.value)}>
                        <option value="">Select field</option>
                        <option value="Finance">Finance</option>
                        <option value="Web development">Web development</option>
                        <option value="App development">App development</option>
                        <option value="Graphics designing">Graphics designing</option>
                        <option value="Business development">Business development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Chemical R&D">Chemical R&D</option>
                        <option value="IoT development">IoT development</option>
                        <option value="Others">Others</option>
                    </select>)
                    :
                    (<select className={classes.join_us_form_select} onChange={(e)=>setDomain(e.target.value)}>
                       <option value="">Select field</option>
                       <option value="Financial management">Financial management</option>
                       <option value="IT management">IT management</option>
                       <option value="Business development">Business development</option>
                       <option value="Marketing head">Marketing head</option>
                       <option value="Environmental Expert">Environmental Expert</option>
                       <option value="Chemical R&D">Chemical R&D</option>
                   </select>)

                    }
                </div>
                <label className={classes.join_us_form_btn1}>
                    {cv != null ?"Uploaded":"Upload Your CV (.pdf)"}
                    <input type="file" ref={file} accept="application/pdf" onChange={handleFile} className={classes.join_us_form_btn1_input}/>
                </label>
            </div>
            <div>
               <center><button className={classes.join_us_form_btn2}>Join Us</button></center>
            </div>
          </form>
      </div>
    );
};
export default JoinUsItemsForm;
