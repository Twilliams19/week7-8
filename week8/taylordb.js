var mysql = require('mysql');
var conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'player',
    database: "video_game",

});

function get_all_xbox(){
    conection.connect(function(err){
        if (err) throw err;
        conection.query("SELECT * FROM xbox", function(err,result){
     if (err) throw err;
 console.log(result);
        });
    });
}

module.exports.get_all_xbox = get_all_xbox;