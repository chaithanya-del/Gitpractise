//let arr=new Array();// syntax to create an array
let arr1=[];
 var fruits=['apple','bannana','mango'];
 console.log(fruits[0]);
 console.log(fruits[1]);
 console.log(fruits[2]);
 fruits[1]='pears';
 fruits[3]='cherry';
 console.log(fruits[3]);
 console.log(fruits.length);
 fruits=['apple','orange','pine','maskmellow'];
 console.log(fruits.pop());//remove item from last
 fruits.push('berry');//insert item to last
 console.log(fruits.shift());//delete item in the beginning
 fruits.unshift('jackfruit');//insert item to beginning

 console.log(fruits);
 let arr=fruits;
 console.log(arr);
 
for(let i=0;i<fruits.length;i++)//a type of for loop helps in displaying middle one also
{
    console.log(fruits);
}
for(let fruit of fruits)//another type of for loop
    {
        console.log(fruits);
    }
    let sam=[1,2,3,4,5];
    sam.length=2;
    console.log(sam);
    sam.length=5;
    console.log(sam[1]);
    let sample=new Array('apple','orange','bannana');