const array=[13,5,67,100,82];
let count=0;
let arr=[];  
const percentile=(array)=>{

    for(i=1;i<=100;i=i+10){  
         
        array.map(data=>{
            //1-10
            //11-20
            //... 91-100
            if(data>=i&&data<=i+9){   //comparing individual array data 
              count++;
            }
        })
        arr.push(count);    
        count=0;
    }
 return arr;
}
const result=percentile(array);
console.log(result);