const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  getMove(callback) {
    reader.question("Enter coordinates", function(res) {
      let pos = res.split(",").map((el) => parseInt(el))
      return callback(pos)
    })
  }
}

module.exports = Player;

// let p = new Player('loren', 'x')
//
// console.log(p.getMove((res)=>{
//   let pos = res.split(",").map((el) => parseInt(el))
//   console.log(pos)
//   reader.close()
// }));
