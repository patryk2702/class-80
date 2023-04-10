nameofstudentarray=[];
function submit(){
    displaystudentarray=[];
    for (var h=1; h<=4; h++){
        var nameofstudent=document.getElementById("name_of_the_student_"+h).value;
        nameofstudentarray.push(nameofstudent);
    }
    var lengthofthestudentarray=nameofstudentarray.length;
    for(var e=0; e<lengthofthestudentarray; e++){
        displaystudentarray.push("<h4> NAME-"+nameofstudentarray[e]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
    var remove_commas=displaystudentarray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    nameofstudentarray.sort();
    displaystudentarraysorting=[];
    var lengthofthestudentarray=nameofstudentarray.length;
    for(var e=0; e<lengthofthestudentarray; e++){
        displaystudentarraysorting.push("<h4> NAME-"+nameofstudentarray[e]+"</h4>")
    }
    var remove_commas=displaystudentarraysorting.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}