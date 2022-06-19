const Config = require("config");

const cassandra = require('cassandra-driver');


module.exports = class Repository {

  constructor() {
    try {
      this.client= new cassandra.Client({ 
        contactPoints: ['127.0.0.1', '127.0.0.1'],
        localDataCenter: 'datacenter1',
        keyspace: 'bdnr3' 
      });
       this.client.connect();
    }
   catch (err) {
    this.client=null
      console.log(`Error trying to connect to database: ${err}`);
    }
  }

  static async initRepository() {
    try {
      this.client= new cassandra.Client({ 
        contactPoints: ['127.0.0.1', '127.0.0.1'],
        localDataCenter: 'datacenter1',
        keyspace: 'bdnr3' 
      });
       this.client.connect();
    }
   catch (err) {
      console.log(`Error trying to connect to database: ${err}`);
    }
  }

    async getAllVehiculos(){
      var res  = null
      const query = "SELECT* FROM vehiculo"
       await new Promise(async function (resolve, reject) {
        await Repository.client.execute(query,function(err,result){
          console.log('pruebitaaa',result.rows[0])
          resolve()
           res= result.rows[0]
          }
          
        ); })  
        return res;
  }

   static add(){
    query =
    `INSERT INTO vehiculo (id,ondas,temperatura,vibracion,presion,voltaje,velocidad,tiempo)
    VALUES(1,1,1,1,'primera prueba',1,1,1)
    `;
     client.execute(query);
   }
};





