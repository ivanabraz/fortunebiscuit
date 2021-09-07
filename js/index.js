import {answers} from './biscuitPapers.js';

$(document).ready(function () {

    // PARTS
    var biscuit = $('.biscuit'),
        biscuitText = $('#biscuitText'),
        biscuitLeftSide = $('.biscuitLeftSide'),
        biscuitPaper = $('.biscuitPaper'),
        biscuitRightSide = $('.biscuitRightSide'),
        open = false;


    // BUILD CLOSED BISCUIT
    function closedBiscuit() {	
        biscuitText.hide();
        biscuitPaper.hide();    
        biscuit.attr('id', 'getFortune');
        biscuitLeftSide.addClass('biscuitLeftSideClosed');
        biscuitRightSide.addClass('biscuitRightSideWithPaperClosed');
        biscuitRightSide.delay(4000).attr('src', './img/biscuitRightSideWithPaper.svg');
    }
    closedBiscuit();

    // GET FORTUNE FUNCTION
    $("#getFortune").on('click', function() {

        if ($(biscuitPaper).is(':hidden')) {
            biscuitText.fadeToggle(1000);
            biscuitPaper.fadeToggle(1000);
            biscuitLeftSide.removeClass('biscuitLeftSideClosed').addClass('biscuitLeftSideOpen');
            biscuitRightSide.removeClass('biscuitRightSideWithPaperClosed').addClass('biscuitRightSideOpen').attr('src', './img/biscuitRightSide.svg');
    
            // PICK RANDOM ANSWER
            var ansIndex = Math.floor(Math.random() * (answers.length));
            
            // SHOW ANSWER
            var answer = answers[ansIndex];
            $("#fortuneText").text(answer);
    
            // PICK RANDOM LUCKY NUMBERS
            var highest = 99;
            var number1 = Math.floor(Math.random() * highest) + 1;
            var number2 = Math.floor(Math.random() * highest) + 1;
            var number3 = Math.floor(Math.random() * highest) + 1;
            var number4 = Math.floor(Math.random() * highest) + 1;
            var number5 = Math.floor(Math.random() * highest) + 1;
            
            // SHOW RANDOM LUCKY NUMBERS
            $("#fortuneNumber").text("Lucky numbers: " + number1 + ", " + number2 + ", " + number3 + ", " + number4 + ", " + number5);
        }
        else {
            closedBiscuit();
            biscuitLeftSide.removeClass('biscuitLeftSideOpen');
            biscuitRightSide.removeClass('biscuitRightSideOpen');
        }
    });

})