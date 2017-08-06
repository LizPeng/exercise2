function add(a, b) {
  // 实现该函数
  var aList = a.split('').reverse()
  var bList = b.split('').reverse()
  var maxLength = Math.max(aList.length, bList.length);
  var cList = [];
  var jinwei = 0;
  for(var  i = 0,l = maxLength; i<l; i++ ){
    var res = (+aList[i] || 0 )+ (+bList[i] || 0 )+ jinwei;
    jinwei = 0;
    if(res>9){
      jinwei = 1;
      res -= 10
    }
    console.log(res)
    cList.push(res)
  }
  if(jinwei === 1){cList.push(jinwei)}
  return cList.reverse().join('')
}

module.exports = add