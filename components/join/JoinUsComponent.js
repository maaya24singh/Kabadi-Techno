
import JoinUsItems from './JoinUsItems';

const DUMMY_INFO=[
  {
     id:'i1',
     text:'Join Our Team as Intern',
     about:'Grab the opportunity to work with a dynamic, fast paced and diverse team to gain valuable experience in the startup ecosystem!',
     description:'Many interns want to take real life project experience before completing their graduation and post-graduation so all of them are welcomed to join our internship program and become a part of our startup. You have the flexibility to choose whichever field you want to work on and we will provide you with the expertise and experience you need. Excellent performers among the interns will be given several opportunities to work in the company.',
     details:'Disclaimer:- We do not charge any amount from our interns during the selection process or while inviting students for interview.'
  },
  {
     id:'i2',
     text:'Join Our Team as Mentor',
     about:'We are in search of a mentor who can inspire us to do better than we know how.' ,
     description:'Our startup have completed 3 years of journey in the field of waste management, our team members are passionately and dicatedly working to solve the waste managment problem using all the possible technology available. We have a dedicated research and development team to meet this purpose. We are in search of mentors to boost and scaleup our startup and help to train our emplyee, come up with invovative and trending ideas to solve this problem of waste managment.' ,
     details: 'Area of Expertise:- 1.Finance 2.Marketing 3.IT Managment 4.Chemicals 5.IoT System 6.Accounting(CA/CS) 7.Operations 8.Graphics Design',
  },
  {
     id:'i3',
     text:'Join Our Team as Investor',
     about:'Join our team as a Investor to help ensuring a hyperlocal waste management community is peresent in every city.',
     description:'Our team is in search of an Angle investors, Venture capitalists, Crowdfunding team for our startup to scaleup our startup mission, Our startup have completed 3 years of journey in the field of waste management, our team members are passionately and dicatedly working to solve the waste managment problem using all the possible technology available.We are recognisied by startup India and have a dedicated research and development to meet this purpose.',
     details:'',
  },

];
const JoinUsComponent = () =>{
    return(
      <section>
        <JoinUsItems info = {DUMMY_INFO}/>
      </section>
    );
};
export default JoinUsComponent;
