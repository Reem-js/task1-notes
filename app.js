const yargs = require('yargs');
const data = require('./notes');

yargs.command({
        command:'add',
        describe:'added data',
        builder:{
            name:{
                describe:'name',
                type:'string'
            },
            id:{
                describe:'id',               
                type:'number'
            },
            grade:{
                describe:'grade',              
                type:'number'
            },
            comment:{
                describe:'comment',
                demandOption:false,
                type:'string'
            }
        },
        handler:function(argv){
           data.addPerson(argv.name,argv.id,argv.grade,argv.comment)
        }
    })


    yargs.command({
        command:'delete',
         describe:'deleted data',
         builder:{
            id:{
                describe:'id',
                type:'number',
                     

                 }
                 
             },
        handler:function(argv){
            data.removePerson(argv.id)              
             }
         })

         yargs.command({
        command:'read',
        describe:'read data',
        builder:{
             id:{
                describe:'id',
                type:'number',
                          

                }
                        
            },
        handler:function(argv){
        data.readData(argv.id)

         }
})
     yargs.command({
        command:'list',
        describe:'listed data',
        builder:{
        name:{
        describe:'name',
        type:'string',
 },
                               
    grade:{
    describe:'grade',
    type:'number',
                                   

    },
                        
},
        handler:function(argv){
        data.listData(argv.name,argv.grade)
                             }
                         })
console.log(yargs.argv);
yargs.parse();