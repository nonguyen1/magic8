/*
 * Author: Nathaniel Nguyen
 * Date: July 19, 2018
 * Description: Magic 8 ball for fun.
 */

"use strict"

// Shake constants
const max_num_shakes = 7;
const min_num_skakes = 3;
const max_shake_distance = 150;
const min_shake_distance = 30;
const shake_speed = 100;
const even_divisor = 2;
const shake_direction = 0.5

// Triangle print settings.
const triangle_color = "rgb(21, 46, 103)";
const triangle_text_color = "rgb(151, 176, 233)"; 
const max_num_lines = 3
const max_char_line1 = 8
const max_char_line2 = 7
const max_char_line3 = 6

// Output results.
const phrases = [
    "Very doubtful",
    "Outlook not so good",
    "My sources say no",
    "My reply is no",
    "Don't count on it",
    "Concentrate and ask again",
    "Cannot predict now",
    "Ask again later",
    "Reply hazy, try again",
    "Better not tell you now",
    "Signs point to yes",
    "Yes",
    "Outlook good",
    "Most likely",
    "As I see it yes",
    "You may rely on it",
    "Without a doubt",
    "Yes, definitely",
    "It is certain"
]

$(document).ready(function(evt) {
    var msg_shown = 0; // State of the ball. 1 if 8 ball msg is shown.  
    var iii; // Counter for number of shakes.

    // Check if the number 8 is being shown.
    if ($('#eight').attr('hidden')) {
        msg_shown = 1; 
    }

    // Shake magic 8 ball on click.
    $('#magic_8').click(function() { 

        // Don't allow clicks until animation is over. 
        if ($(':animated').length) {
            return false;
        }

        // Need to shake the ball and reveal result.
        if (!msg_shown) {
            build_answer(); // Generate a new text result.

            $('#instruction').text("Click the ball to reset.");

            // Shake the ball.
            var num_shakes = Math.ceil(max_num_shakes * Math.random());
            if (num_shakes < min_num_skakes) {
                num_shakes = min_num_skakes;
            } 

            // Randomize start left or start right.
            var start = Math.random()
            if (start < shake_direction) {
                iii = 1; 
            } else {
                iii = 0;
            } 

            // Perform Shakes.
            for (iii; iii < num_shakes; iii++) {

                // Generate random distance
                var shake_distance = Math.ceil(max_shake_distance * Math.random());
                if (shake_distance < min_shake_distance) {
                    shake_distance = min_shake_distance;
                } 
                shake_distance = String(shake_distance) + "px";

                // Even shake, move left.
                if (iii % even_divisor === 0) {
                    $(this).animate({ left: shake_distance}, shake_speed); 
                } 
                // Odd shake, move right.
                else {
                    // Make sure to shake in negative direction.
                    shake_distance = "-" + shake_distance; 
                    $(this).animate({ left: shake_distance}, shake_speed); 
                } 
            } 

            // Recenter the ball, and hide the '8' logo.
            $(this).animate({ left: '0px'}, shake_speed, 
                function() {
                    // Begin show message.
                    $('#inner_cirlce').fadeOut(100); 
                    //$('#inner_cirlce').hide();
                    $('#msg_cirlce').show(100);
                    $('#myCanvas').fadeIn(2000);
                }); // Recenter ball.  
            msg_shown = 1;
        } 

        // Flip the ball back to the eight (reset).
        else { 
            $('#instruction').text("Click the ball to reveal your fate");
            $('#msg_cirlce').hide(100);
            $('#myCanvas').hide(100);
            $('#inner_cirlce').show(100);
            msg_shown = 0;
        } 
    }); 
});

/*
 * build_answer()
 * Draws randomly pick text and print the text into the prediction triangle.
 */
function build_answer() {
    // Draw the item in the canvas.
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d"); 
    var choice = Math.floor(phrases.length * Math.random());

    draw_triangle(context);

    context.font = "18px Arial";
    context.fillStyle = triangle_text_color;
    context.textAlign = "center"; 

    // Get an array for each line of text to print.
    var fate_str = phrases[choice];
    var text = generate_text(fate_str);

    // TODO: Remove magic numbers.
    context.fillText(text[0], 75, 30);
    context.fillText(text[1], 75, 55);
    context.fillText(text[2], 75, 80); 
}

function draw_triangle(context) {
    // TODO: Remove magic numbers.
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(150, 0);
    context.lineTo(75, 150);
    context.closePath(); 

    context.fillStyle = triangle_color;
    context.fill();
}

function generate_text(phrase) {
    /* generate_text
     * 
     * Param:
     * --phrase: A string to parse to three lines.
     *
     * Return: An array with 3 elements for each line to print. If a line is
     * empyt, then there is an empty string in the position.
     */

    var array = ["", "", ""]; // String for the 3 lines to print. 
    var length = phrase.length
    var words = phrase.split(" ");
    var current_line = 0;
    var char_max = [max_char_line1, max_char_line2, max_char_line3]
    var iii = 0;
    var chars_added;
    var current_word;

    while (current_line < max_num_lines) {
        chars_added = 0;

        while (words[iii] && chars_added < char_max[current_line]) {
            chars_added += words[iii].length + 1;
            array[current_line] = array[current_line] + words[iii] + " ";
            iii++;
        } 
        current_line++;
    }
    return array;
}
