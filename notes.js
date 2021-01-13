const fs = require('fs');


/////////// add /////////////
const addPerson=(name,id,grade,comment)=>{
const data = loadData();
const duplicateId=data.filter(function(data){
 return data.id === id
})
if(duplicateId.length ===0){
 data.push({
     name,
     id,
     grade,
     comment
 })
 saveData(data)
 console.log('saved successfully')
}
else{
 console.log('error')
}

};
//////////// remove /////////
const removePerson =(id)=>{
 const data =loadData();
 const dataToKeep = data.filter(function(data){
     return data.id !== id
 })
     
 if (data.length > dataToKeep.length){
     console.log('data removed');
     saveData(dataToKeep);
 }
 else{
     console.log('error')
 }
}
//////////// read  /////////////////////////

 const readData =(id)=>{
    const data =loadData();
    const dataToRead = data.find(function(data){
        return data.id === id
    })
    if (dataToRead){
        console.log(dataToRead.id);
    }
    
}
///////////// list //////////////////////////


const listData =()=>{
    const data =loadData();
    data.forEach(person => {
        console.log(person.name,person.grade)
    });

}
////////////// load data /////////////////////////

const loadData=()=>{
 try{
    const dataBuffer=fs.readFileSync('task.json').toString();
    return JSON.parse(dataBuffer);
 }
 catch(e){
     return[];
 }
 };
     const saveData=(data)=>{
     const savedata =JSON.stringify(data);
     fs.writeFileSync('task.json',savedata);
 }
module.exports={
addPerson:addPerson,
removePerson:removePerson,
readData:readData,
listData:listData

}