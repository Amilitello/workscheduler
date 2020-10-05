$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".saveBtn") .on("click", function(){
        var textvalue= $(this).siblings(".description").val()
        var time= $(this).parent().attr("id")
        localStorage.setItem(time,textvalue)
    })
    function changeTime(){
        var currentTime=moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
        var timeBlock=$(this).attr("id")
        if(timeBlock<currentTime){
            $(this).addClass("past")
        }
        else if(timeBlock>currentTime){
            $(this).removeClass("past")
            $(this).addClass("future")
        }
        else{
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present")
            
        }
        })
    }
    changeTime()
$("#9 .description").val(localStorage.getItem("9"))
// copy for all time slots on html line 15 and change id in relation to time  
})