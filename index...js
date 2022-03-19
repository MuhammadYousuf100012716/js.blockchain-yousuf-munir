// object, for loop, if else condition, array 
student={
name:"muhammad yousuf s/o muhammad munir shaikh",
course:"block chain programming",
quizmarks:[90,95,70],
attendence:75,
total:250,
}
sum=0;
for(i=0;i<student.quizmarks.length;i++){
    sum= sum+student.quizmarks[i];
}
if(sum>=student.total){
    console.log("passed with marks:"+sum)
}
else{
    console.log("failed with marks:"+sum)
}
if(student.attendence>=85){
    console.log("atttendence is full i.e"+student.attendence +"%");
}
else{
    console.log("atttendence is full i.e"+student.attendence +"%");
}