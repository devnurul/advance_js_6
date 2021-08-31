 const normalPerson ={
     firstName : "Rahim",
     lastName : "Uddin",
     salary : 15000,
     getFullName: function(){
         console.log(this.firstName, this.lastName);
     },
     chargeBill: function(amount){
         console.log(this);
         this.salary = this.salary- amount;
         return this.salary;
     }

 } 
//  console.log(normalPerson.chargeBill(5000));

 const heroPerson = {
     firstName : "Molam",
     lastName : "Sobuz",
     salary: 10000,
 }
//  normalPerson.chargeBill()
 const heroBill = normalPerson.chargeBill.bind(heroPerson);

 heroBill(200)