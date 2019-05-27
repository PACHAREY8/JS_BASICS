
module.exports=
{
    FirstName()
    {
        var read=require('readline-sync');

         /* Enter the user's First name
         */
        var name=read.question("Enter first name ");

        /* return the Entered name from function
         */
        return name;
    },


    Lastname()
    {
        var read=require('readline-sync');

        /* Enter the user's Last name
         */
        var lname=read.question("Enter last name");

        /* return the Entered last name from function
         */
        return lname;
    },

    Address()
    {
        var read=require('readline-sync');

         /* Enter the user's Address
         */
        var addr=read.question("Enter Address");

         /* return the Entered Address from function
         */
        return addr;
    },


    City()
    {
        var read=require('readline-sync');

         /* Enter the user's City
         */
        var city=read.question("Enter City name");

          /* return the Entered City from function
         */
        return city;
    },


    zip()
    {
        var read=require('readline-sync');

         /* Enter the user's zip
         */
        var zip=read.question("Enter zip code");

          /* return the Entered zip from function
         */
        return zip;
    },

    Mobile()
    {
        var read=require('readline-sync');

         /* Enter the user's Contact Number
         */
        var mob=read.question("Enter Contact Number");

        /* condition for length of contact number
         */
        if(mob.length!=10)
        {
            console.log("Enter 10 digit number")
        }

          /* return the Entered Contact number from function
         */
        return mob;
    },
          /*Add new person's information inside the record
          */
    AddPerson (object)
    {
        /* making object of json file */
        var obj=object.Details;

        /* Assigning all the functions to new assigned variable
         */
        var name=this.FirstName();
        var lname=this.Lastname();
        var addr=this.Address();
        var city=this.City();
        var zip=this.zip();
        var mob=this.Mobile();
        
        /* Assigning User defined function's 
        variable to Json variable
         */
        obj.push(
            {
            "FName": name,
            "LName": lname,
            "Address": addr,
            "City":city,
            "zip": zip,
           "Mob_No":mob
          })
         
          /* Printing the object */
        console.log(obj);
    },
     

    /* Making Function to edit the Available
     information of Address book 
     */
    Editperson(object)
    {
        var read=require('readline-sync');

        /* making object of json file  */
        var obj=object.Details;
        val=-1;
        var name=this.FirstName();
        var mob=this.Mobile();

        /* for loop for assigning the content given by user to json data
         */
        for(var key in obj)
        {
            if(obj[key].FName==name && obj[key].Mob_No==mob)
            {
                val=key;
            }
        }
    
        console.log("Persons Details are");
        console.log(obj[val])

        /* Availibility to choose any of the option 
        whichever user want to access   
        */
        var ipn=read.questionInt("Choose any one from the list \n"+
        "1.Edit Address \n 2.Edit City \n 3.Edit zip \n 4.Edit mobile");

        /* Switch statement for each content of Address Book
         */
        switch(ipn)
        {
            case 1: var address=this.Address();
            obj[val].Address=address;
            break;

            case 2:var city=this.City();
            obj[val].City=city;
            break;

            case 3: var zip=this.zip();
            obj[val].zip=zip;
            break;

            case 4: var mob=this.Mobile();
            obj[val].Mob_No=mob;
            break;

            default : console.log("wrong input");
            
        }
    },

    /* Function for Contact deleting 
     */
    deleteContact(object)
    {
        var read=require('readline-sync');

        /* Making object of Json data
         */
        var obj=object.Details;
        var name=this.FirstName();
        var mob=this.Mobile();
        var val=-1;

        /* for loop for validating the data in 
        json file and user defined data
         */
        for(var key in obj)
        {
            if(obj[key].FName==name && obj[key].Mob_No==mob)
            {
                val=key;
            }
        }

        /* checking for value */
        if(val==-1)
        {
            console.log("Data not exist");
        }
        else{
        console.log("persons details are : ")

        console.log(obj);
        }

        /* Asking for confirmation of data deletion and Exit  */
        var ip=read.question("Are you sure ? \n"+"1.Delete \n 2.Exit");

        if(val==0)
        {
            obj.splice(val,1);
        }
        else

        return;
    },

       /* Wrting  json file back to another json file 
        */
    savefile(object)
    {
        var fs=require('fs');
        fs.writeFileSync("opAddrJson.json",JSON.stringify(object));
        console.log("Saved successfully");
    },
     /* Displaying all the data in json file
      */
    Display(object)
    {
        var obj=object.Details;
        for(var key in obj)
        {
            console.log(obj[key]);
        }
    },
    

    /* Sorting data inside the json file as per Name
      */
    SortByname(object)
    {
       
        var fs=require('fs');

        /* Traversing till length of json data
        and arranging it in ascending order
         */
        for(var i=0;i<object.Details.length-1;i++)
        {
            if(object.Details[i].LName===object.Details[i+1].LName)
            {
                var temp=object.Details[i];
                object.Details[i]=object.Details[i+1];
                object.Details[i+1]=temp;
            }
        }
        console.log(object);

        /* Writing back data to new json file
         */
       fs.writeFileSync("opAddrJson.json",JSON.stringify(object));
    },
     

    /* Sorting content of json array according 
    to zip code in ascending order
     */
    sortbyZip(object)
    {
        /* travering till json array length and then 
        sorting it into Ascending Order
        */
        for(var i=0;i<object.Details.length-1;i++)
        {
            if(object.Details[i].zip>object.Details[i+1].zip)
            {
                var temp=object.Details[i];
                object.Details[i]=object.Details[i+1];
                object.Details[i+1]=temp;
            }
        }
        console.log(object);
    },
     

    /* Main Address Book Function
     */
    AddressBook(object,read)
    {
        var read=require('readline-sync');
        console.log("*****PERSONAL ADDRESS DETAILS *****")

        /*  Availing key for choosing any of the option 
        as per user's need 
         */
        var key=Number(read.question("Choose one from below \n"+
        "1. Add_person \n 2. Edit_person  \n 3. Delete_person \n 4. Sort_By_Name \n 5. Sort_by_zip \n 6. Display \n 7. Save_file \n 8. Exit "))
         

        /* Switch Statement for Switching to each case and option
         which are made available to us and have assigned each
          function that belongs to particular option  
          */
        switch(key)
        {
            case 1: this.AddPerson(object);
            return this.AddressBook(object);
            break;

            case 2: this.Editperson(object);
            return this.AddressBook(object);
            break;

            case 3:this.deleteContact(object);
            return this.AddressBook(object);
            break;

            case 4: this.SortByname(object);
            return this.AddressBook(object);
            break;

            case 5: this.sortbyZip(object);
            return this.AddressBook(object);
            break;

            case 6: this.Display(object);
            return this.AddressBook(object);
            break;

            case 7:this.savefile(object);
            return this.AddressBook(object);
            break;

            case 8: console.log("closing Address Book....");
            return;
            break;

            default : console.log("wrong input");
            return this.AddressBook(object);
        }
    
    }
}