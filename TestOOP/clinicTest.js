/* importing assert and chai
 */
const assert=require('chai').assert;

/* getting path for ,main clinic file
 */
const cpath=require('../oop/clinicMain');
const fs=require('fs');

/* reading json file
 */
var data=fs.readFileSync('../oop/clinic.json');

/* parsing json string
 */
var clinic=JSON.parse(data);
describe("Clinic input Data Check",function(){
    it("File should not be Empty",function(){

        /* checking for data is NaN 
        */
        assert.isTrue(isNaN(clinic));
    });

    it("Name Should of string type",function(){
        for(var i=0;i<clinic.Doctors.length;i++)
        {
            /* checking for name of doctors are string or not
             */
            var arr=clinic.Doctors[i].Name;
            assert.isString(arr)
        }
    });

    it("Age should be a number",function(){
        for(var i=0;i<clinic.Patients.length;i++)
        {

            /* checking for Age is number
             */
            var arr=clinic.Patients[i].Age;
            assert.isNumber(arr)
        }
    })

});