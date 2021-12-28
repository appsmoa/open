var arr = ['egoing','dgoing', 'cgoing'];

var i = 0;
while(i<arr.length){
//    console.log ('array :', arr[i]);
    i=i+1;
}

var obj = {
  'e':'egoing',
  'd':'dgoing',
  'c':'cgoing'
};

for(var name in obj){
  console.log('object :', name, 'value :', obj[name]);
}
