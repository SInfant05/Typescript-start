interface Add{
    (x:number,y:number):any
}

var add:Add = function (x,y):any  {
    console.log(x+y);
}
add(10,20);
add(30,40);