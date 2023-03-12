import FAQItems from './FAQItems';

const DUMMY_DATA = [
  {
    id: 'q1',
    text:'How do I register my account?',
    description: `Steps to register account- \n
                  1.Visit the site KABADITECHNO.COM. \n
                  2.Click on MENU box at top of the site. \n
                  3.Click on REGISTER and fill all the detail with proper mobile number over which OTP is generated. \n
                  4. Enter the OTP sent on the mobile number and then account is activated.`
  },
  {
     id:'q2',
     text:'How can I activate my account after deactivation?',
     description:'In that case you contact to company person on given contact number or write a mail regarding activation of account to company mail id. The team will contact you soon and sort out the problem.'
  },
  {
     id:'q3',
     text:'Who will come to collect the order?',
     description:'Order is collected by well authorized person with company identity card. The door step collector has a good knowledge of waste and segregation process. He is well aware of pollution and health hazard caused by waste.'
  },
  {
     id:'q4',
     text:'What are the payment methods available?',
     description:'Methods available are- \n a. Cash \n b. Kabadi Techno wallet'
  },
  {
     id:'q5',
     text:'In case I want my order to be returned, is it possible?',
     description:'No, there is no return of order as it has been segregated or disassemble after collection.',
  },
  {
     id:'q6',
     text:'What is the difference between personal and organization account?',
     description:'Personal account- These are those account who generate less amount of waste (in kg) and is mainly meant for local customers. \n Organization account- Those account who generate large amount of waste (in tones) and is mainly meant for a company, factory etc.'
  },
];
const FAQQuestion = () =>{

    return(
       <FAQItems data={DUMMY_DATA}/>
    );
};

export default FAQQuestion;
