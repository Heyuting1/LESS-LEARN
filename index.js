// console.log('123')
var object = {
  name: "My Object",
  getName: function() {
      return console.log(this.name)//the window
  }
};
// (object.getName = object.getName)();//空

var a=1
let b=true
var d='gloabal'
function test(b){
  let c=12;
  var d='scope'
  const e=22
  if(b){
    let d='test'
    var a=false
    console.log('a',a)
  }
  console.log('d',d)
}
test(b)