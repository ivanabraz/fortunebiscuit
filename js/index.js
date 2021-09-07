import {answers} from './cookiePapers.js';

$(document).ready(function () {

    // PARTS
    var cookie = $('.cookie'),
        cookieText = $('#cookieText'),
        cookieLeftSide = $('.cookieLeftSide'),
        cookiePaper = $('.cookiePaper'),
        cookieRightSide = $('.cookieRightSide'),
        open = false;


    // BUILD CLOSED cookie
    function closedCookie() {	
        cookieText.hide();
        cookiePaper.hide();    
        cookie.attr('id', 'getFortune');
        cookieLeftSide.addClass('cookieLeftSideClosed');
        cookieRightSide.addClass('cookieRightSideWithPaperClosed');
        cookieRightSide.delay(4000).attr('src', './img/cookieRightSideWithPaper.svg');
    }
    closedCookie();

    // GET FORTUNE FUNCTION
    $("#getFortune").on('click', function() {

        if ($(cookiePaper).is(':hidden')) {
            cookieText.fadeToggle(1000);
            cookiePaper.fadeToggle(1000);
            cookieLeftSide.removeClass('cookieLeftSideClosed').addClass('cookieLeftSideOpen');
            cookieRightSide.removeClass('cookieRightSideWithPaperClosed').addClass('cookieRightSideOpen').attr('src', './img/cookieRightSide.svg');
    
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
            closedCookie();
            cookieLeftSide.removeClass('cookieLeftSideOpen');
            cookieRightSide.removeClass('cookieRightSideOpen');
        }
    });

})