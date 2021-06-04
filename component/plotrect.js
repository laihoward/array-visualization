
var canvas=document.getElementById('canvas');//讓電腦抓到 canvas 標籤
var cxt=canvas.getContext('2d'); //2d 平面圖形
cxt.beginPath();//開啟新路徑	
cxt.stroke();
cxt.closePath();
for (i=1;i<=10;i++){
    x=i*50;
    plotrect(100+x,200,50) 
    cxt.font = "10pt sans-serif";
    cxt.fillText(i-1,125+x, 270)
} 

let size = 0;
let array = [];
const pushvalue = document.querySelector('.pushvalue');
const pushbutton = document.querySelector('.pushbutton');
const clearbutton = document.querySelector('.clearbutton');

const ArrayNumber = document.querySelector('.ArrayNumber');
const ArraySize = document.querySelector('.ArraySize');
const Warning = document.querySelector('.Warning');

function plotrect (x,y,size){
    cxt.strokeRect(x,y,size,size);
}

function TextInRect(data,z){
    x=150+50*z
    if(data<10){
        cxt.font = "20pt sans-serif";
        cxt.fillText(data,x+18,233);
    }
    else if(10<=data<100){
        cxt.font = "20pt sans-serif";
        cxt.fillText(data,x+10,233)
    }else {
        cxt.font = "10pt sans-serif";
        cxt.fillText(data,x+10,233)
    }
    }

function PushDataInRect (){
    if (size>=10){
            Warning.textContent = "Array is fulled";
        }
    else{
        if (size===0){
            ArrayNumber.textContent = 'Array is : ';
            ArraySize.textContent= 'Array size is : 1 ';
        }
        var data = Number(pushvalue.value);
        TextInRect(data,size);
        array.push(data);
        ArrayNumber.textContent = "Array is : " +array
        ArraySize.textContent = 'Array size is : '+(size+1);
        size++;
        
    }
    
    pushvalue.value = '';
}
function clearArray(){
    ArrayNumber.textContent = 'Array is : ';
    ArraySize.textContent= 'Array size is : 0';
    Warning.textContent = '';
    for (i=1;i<=10;i++){
        x=i*50;
        cxt.clearRect ( 105+x , 205 ,40 , 40 );
    } 
    size = 0;
    array = []
    pushvalue.value = '';
}

function bubblesorting(){
    countnumber = size
    while (countnumber>1){
        countnumber--;
        for(i =0;i<countnumber;i++){
            if(array[i]>array[i+1]){
                chosenumber = array[i];
                array[i]=array[i+1];
                array[i+1]=chosenumber;
            }

        }
    }
    ArrayNumber.textContent = "Array is : " +array
    for(i=0;i<size;i++){ 
        data = array[i];
        x=i*50;
        cxt.clearRect ( 155+x , 205 ,40 , 40 );
        TextInRect(data,i);
    }
}