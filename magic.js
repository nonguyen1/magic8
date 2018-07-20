/*
 * Author: Nathaniel Nguyen
 * Date: July 19, 2018
 * Description: Magic 8 ball javascript file.
 */

"use strict"

const max_num_shakes = 12;
const min_num_skakes = 3;
const max_shake_distance = 150;
const min_shake_distance = 30;

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
        if (start < 0.5) {
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
            if (iii % 2 === 0) {
                $(this).animate({ left: shake_distance}, 100); 
            } 
            // Odd shake, move right.
            else {
                // Make sure to shake in negative direction.
                shake_distance = "-" + shake_distance; 
                $(this).animate({ left: shake_distance}, 100); 
            } 
        } 
        $(this).animate({ left: '0px'}, 200); // Recenter ball.
    }); 
});
