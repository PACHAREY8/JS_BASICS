/* Main function clinic Appointment 
for Booking Appointment 
*/
function CAppointment()
{
    var prompt=require('prompt-sync')();
    const fs=require('fs');

    /* Declaring regEx format to two different variables
     */
    var nameformat=/[a-z]/g;
    var contactformat=/[0-9]/g;
    var  read=fs.readFileSync('../oop/clinic.json');

    /* Parsing the string
     */
    var clinique=JSON.parse(read);
  //  console.log(clinique);

    do
    {
        /* Choose one of the option which are made available for user 
        */
        console.log("1. Add Appointment \n 2. PrintList \n 3. search \n 4. Exit");
        var option = prompt("Enter an Option");

        /* Parsing string to integer type by using switch statement
         */
        switch (parseInt(option))
        {

            /* Checking for Doctors Availibility
             */
            case 1: console.log("*** Doctors Availability ***");
            console.log(clinique.Doctors);

              /* Checking for Patients name is in given format or not
               */
            var name=prompt("Patient name : ")
            if(nameformat.test(name)==false)
            {
                console.log("Invalid Name");
                return false;
            }

            /* Making Random Id's of patient
              */
            var id=parseInt(Math.random()*1000)

            /* Asking user to enter their contact number
             */
            var mobNo=prompt("Enter Mobile number : ")

            /* Checking for contact number format
            along with length of contact number
             */
            if(contactformat.test(mobNo)==false || mobNo.length!=10)
            {
                console.log("Invalid Contact number")
                return false;
            }
            
             /* Asking user to Enter Age of patient
              */
            var age=prompt("Enter age : ");

            /* Testing for age format of Patient 
            */
            if(contactformat.test(age)==false)
            {
                console.log("Enter valid age ")
                return false;
            }
             

            /* Asking for to choose which Doctors Appointment
             does user want  
             */
            var Appointment_With=prompt("Whose Appointment You want : ")
            if(nameformat.test(Appointment_With)==false)
            {
                console.log("Invalid name! ");
                return false;
            }
              /* Assigning Patients data to json file data
               */
            clinique.Patients.push
                (
                {
                    "Name":name,
                    "Id":id,
                    "Contact_No":mobNo,
                    "Age" :age,
                    "Appointment_With":Appointment_With
                }
                )
                
                  /*Printing confirmation of Appointment 
                   */
                console.log("Appointment register Successfully...");
                  
                /* Writing  json file down to new json file
                  */
                fs.writeFileSync('../oop/cAppointment.json',JSON.stringify(clinique));
                break;

                case 2: console.log(clinique);
                break;

                  /* Searching for particular doctor and Patients in list
                   */
                case 3: console.log("Search List");

                /* Choose from available options
                 */
                console.log("1. Doctor \n 2. Patient");
                 var option2 =prompt("Select option");

                 /* If Option two is selected .... */
                 if(option2 ==1)
                {
                     console.log("*** Select Any Option ***")

                     /* choose anyone of the options available down
                      */
                     console.log("1. search_By_Name \n 2. Search_By_Id \n 3. Search_By_Specialization \n 4. Search_By_Availability");
                     var option3=prompt("Select any Option : ");
                     if(option3==1)
                    {
                         var i=prompt('Name :')

                         /* checking for assigned data and data inside the json 
                         file are same or not if yes then print it out 
                         */
                         for(var key in clinique.Doctors)
                        {
                             if(clinique.Doctors[key].Name == i)
                            {
                              console.log(clinique.Doctors[key]);
                            }
                        }
                    }

                     /* if option 2 is selected..  */
                    else if(option3==2)
                    {
                        /* Check for user input id with json id 
                        if both are same then print the data */
                        var i=prompt('Id :');
                        for(var key in clinique.Doctors)
                        {
                            if(clinique.Doctors[key].Id ==i)
                            {
                                console.log(clinique.Doctors[key]);
                            }
                        }
                    }

                    /*If option 3  is selected
                      */
                    else if(option3==3)
                    {
                        /* Check for user input specialization with json file
                         specialization of doctors if it matches then print the data 
                         */
                        var i=prompt('Specialization :')
                        for(var key in clinique.Doctors)
                        {
                            if(clinique.Doctors[key].Specialization==i)
                            {
                                console.log(clinique.Doctors[key]);
                            }
                            
                        }
                    }

                    /* if option 4 ..
                    */
                    else if(option3==4)
                    {
                        /* Check for user input availability and json avalability
                         of doctors and print matched one 
                         */
                        var i=prompt('Availibility :')
                        for(var key in clinique.Doctors)
                        {
                            if(clinique.Doctors[key].Availability==i)
                            {
                                   console.log(clinique.Doctors[key]);
                            }
                            
                        }
                    }
                }

                /* igf option two is selected
                 */
                if(option2==2)
                {
                    console.log("*** Select Any Option ***");

                    /* Select any one of the option which are made available for us
                     */
                    console.log("1. Search_By_Name \n 2. Search_By_Id \n 3. Search_By_Contact_no \n 4. Search_By_age");
                    var option4=prompt('Select Any Option ');

                    /* if option 1 is selected
                     */
                    if(option4==1)
                    {
                        /*  Check for the user input name with json file name of patient 
                        if both  matches  then print the data
                        */
                        var i=prompt("Name :")
                        for(var key in clinique.Patients)
                        {
                            if(clinique.Patients[key].Name==i)
                            {
                                console.log(clinique.Patients[key]);
                            }
                         
                        }
                    }
                    /* if option two is selected .... */
                    if(option4==2)
                    {
                        /* if user defined id is matched with json id of patient 
                        then print the json id
                         */
                        var i=prompt('Id :')
                        for(var key in clinique.Patients)
                        {
                            if(clinique.Patients[key].Id==i)
                            {
                              console.log(clinique.Patients[key]);
                            }
                        }
                    }
                    /* if option 3 is selected
                     */
                    if(option4==3)
                    {
                        /* if user contact number given by user matches with
                         json data of patient then print the conatct number 
                         */
                        var i=prompt('Contact_No :')
                        for(var key in clinique.Patients)
                        {
                            if(clinique.Patients[key].Contact_No==i)
                            {
                                console.log(clinique.Patients[key]);
                            }
                        }
                    }
                    /* if option 4 is selected..
                    */
                    if(option4==4)
                    {

                        /* if Age input by user matches with json data 
                        of patient then print the Age of that person 
                        */
                        var i=prompt('Age :')
                        for(var key in clinique.Patients)
                        {
                            if(clinique.Patients[key].Age==i)
                            {
                                console.log(clinique.Patients[key]);
                            }
                        }
                    }
                }
                break;

                /* if none of above case occure then defauld case get executed
                 */
                default:console.log("Enter valid output")
            
        }
       /*Run while loop uptil option is not reach to 4  
       */
    }while(option!=4)
    return option;
    
}
module.exports=CAppointment();