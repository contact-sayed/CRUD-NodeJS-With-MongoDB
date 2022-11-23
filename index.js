var MongoClient=require("mongodb").MongoClient
var URL="mongodb+srv://sayedDemo:qDII1VJYRZPR0iT0@cluster-sayed.rzuy5gz.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URL, function (error, MyMongoClient,){

    if(error){
        console.log("Connection is Failed");
    }
    else{
        console.log("Connection is Success");
        // InsertData(MyMongoClient);
        // DeleteOneItem(MyMongoClient);
        // DeleteAllItems(MyMongoClient);
        // findOneWithoutCondition(MyMongoClient);
        // findOneWithCondition(MyMongoClient);
        // findAllData(MyMongoClient);
        // findAllDataByProjection(MyMongoClient);
        // findAllDataByQuery(MyMongoClient);
        // findAllDataByLimit(MyMongoClient);
        // findAllDataBySort(MyMongoClient);
        // updateMyData(MyMongoClient);
        // createMyCollection(MyMongoClient);
        // deleteMyCollection(MyMongoClient);
    }
});

// InsertData Node JS with MongoDB
function InsertData(MyMongoClient){
    var MyDatabase=MyMongoClient.db("school");
    var MyCollection=MyDatabase.collection("students");
    var MyData={name:'Adnan', Age:'02', Class:'0', Roll:'01', City:'Dhaka', State: 'Dhaka', Country:'Bangladesh'};
    
    MyCollection.insertOne(MyData, function(error){

        if (error){
            console.log("Data Insert Failed");
        }
        else{
            console.log("Data Insert Success");
        }})
    }

        // DeleteOneItem Node JS with MongoDB
    function DeleteOneItem(MyMongoClient){
        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        var DeleteItem= {name:"Fahim"};

        MyCollection.deleteOne(DeleteItem, function(error){
            if (error){
                console.log("Data Delete Failed");

            }
            else{
                console.log("Data Delete Success");
     } })
    }


        // DeleteAllItems Node JS with MongoDB
    function DeleteAllItems(MyMongoClient){
        var MyDatabase=MyMongoClient.db("school");
    var MyCollection=MyDatabase.collection("students");

    MyCollection.deleteMany(function(error, ResultObj){
        if(error){
            console.log('Delete All Items Failed');
        }
        else{
            console.log("ResultObj");
        }
            
        })
    }

                // findOneWithoutCondition Node JS with MongoDB
    function findOneWithoutCondition(MyMongoClient){

        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        var FindObj={}

        MyCollection.findOne(FindObj, function(error, result){
            console.log(result);
        })
    }

         // findOneWithCondition Node JS with MongoDB
    function findOneWithCondition(MyMongoClient){

        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        var FindObj={Roll:"01"}

        MyCollection.findOne(FindObj, function(error, result){
            console.log(result);
        })
    }

        // findAllData Node JS with MongoDB
    function findAllData(MyMongoClient){

        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        MyCollection.find().toArray(function(error, result){
            console.log(result);
        })
    }

    // findAllDataByProjection Node JS with MongoDB
    function findAllDataByProjection(MyMongoClient){

        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        var ItemObj={}
        var ItemProjection={projection:{Class:"", name:"",Roll:""}}
        MyCollection.find(ItemObj,ItemProjection).toArray(function(error, result){
            console.log(result);
        })
    }

            // findAllDataByQuery Node JS with MongoDB
    function findAllDataByQuery(MyMongoClient){

        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        var Query={City:"Rajshahi", Roll:"01"}
        
        MyCollection.find(Query).toArray(function(error, result){
            console.log(result);
        })
    }

        // findAllDataByLimit Node JS with MongoDB
    function findAllDataByLimit(MyMongoClient){

        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        
        
        MyCollection.find().limit(3).toArray(function(error, result){
            console.log(result);
        })
    }

        // findAllDataBySort Node JS with MongoDB
    function findAllDataBySort(MyMongoClient){

        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        var SortPattern={Class:1}
        
        MyCollection.find().sort(SortPattern).toArray(function(error, result){
            console.log(result);
        })
    }

        // updateMyData Node JS with MongoDB
    function updateMyData(MyMongoClient){
        var MyDatabase=MyMongoClient.db("school");
        var MyCollection=MyDatabase.collection("students");

        var MyQuery={Roll:"2"}
        var MyUpdateData={$set:{name:"Abdullah AL Zabir", City:"Rajshahi"}}
        MyCollection.updateOne(MyQuery, MyUpdateData,function(error, result){
            console.log(result);

        })
    }

    // createMyCollection Node JS with MongoDB
    function createMyCollection(MyMongoClient){
        var MyDatabase=MyMongoClient.db("school");

        MyDatabase.createCollection("Teachers", function (error, result){
            console.log(result);
        })

    }

    // deleteMyCollection Node JS with MongoDB
    function deleteMyCollection(MyMongoClient){
    var MyDatabase=MyMongoClient.db("school");

    MyDatabase.dropCollection("Teachers", function(error, result){
        console.log(result);
    })
    }