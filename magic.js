/*
 * Author: Nathaniel Nguyen
 * Date: July 19, 2018
 * Description: Magic 8 ball javascript file.
 */

"use strict"

const max_num_shakes = 9;
const min_num_skakes = 5;
const max_shake_distance = 150;
const min_shake_distance = 30;
const shake_speed = 100;
const even_divisor = 2;
const shake_direction = 0.5

$(document).ready(function(evt) {
    var iii; // Counter for number of shakes.

    // Shake magic 8 ball on click.
    $('#magic_8').click(function() { 
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
        console.log(iii);

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
        $(this).animate({ left: '0px'}, shake_speed); // Recenter ball.

        // Begin the reveal. Fade out the inner cirle and show the triangle.
    }); 

    // Draw the item in the canvas.
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d"); 

    context.beginPath();
    context.moveTo(125, 0);
    context.lineTo(25, 100);
    context.lineTo(225, 100);
    context.closePath(); 

    context.fillStyle = "#FF0000";
    context.fill();
//    context.fillRect(0,0,150,75);
});

