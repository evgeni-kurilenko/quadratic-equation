module.exports = function solveEquation(equation) {
  var eq = equation.split(" ");
  var a = parseInt(eq[0]);
  var b = parseInt(eq[3]+eq[4]);
  var c = parseInt(eq[7]+eq[8]);
  
    var bb = b/a;
    var cc = c/a;
    
  var d = bb*bb - 4*cc;
  var xx = [];
  xx[0] = -bb/2+Math.sqrt(d)/2;
  xx[1] = -bb/2-Math.sqrt(d)/2;
  
  function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
    return xx.sort(compareNumeric);

}
