// RUNDOWN OF WHAT SHOULD HAPPEN
// 1. The user types a value in to the text field aka 'input[name="post"]'
// 2. When the user hits the BUTTON that says Post aka 'input[value="Post"]' and submits form...
// 3. The user input should concatonate with a string that has a number or variable that holds a particular number in memory as a string
// 4. Based on 3 different conditions, the concatonated string is prepended in #page...
// 5. Each time the button is clicked! 
 
// WORKING SOLUTION
$(document).ready(function() {
    $("form").submit(function(data) {
        data.preventDefault();
        var toAdd = $("input[name=post]").val();
        if (toAdd === "number one") {
            $("#page").prepend("<div class=rand1>" + toAdd + "&nbsp" + "-" + "&nbsp" + "46" + "</div>" )
        }
        else if (toAdd === "number two") {
            $("#page").prepend("<div class=rand2>" + toAdd + "&nbsp" + "-" + "&nbsp" + "4" + "</div>" )
        }
        else {
            $("#page").prepend("<div class=rand3>" + toAdd + "&nbsp" + "-" + "&nbsp" + "20" + "</div>" )
        }
    });
});

// WHAT preventDefault(); SEEMS TO BE DOING IS PREVENTING THE PAGE TO BE REFRESHED. 
// WHEN "number one" IS ACCEPTED AS AN INPUT, "two" & "three" ARE STILL ON THE NUMBER ONE URL.