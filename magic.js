"use strict"

const max_num_shakes = 8;
const min_num_skakes = 3;

$(document).ready(function(evt) {
    $('#magic_8').click(function() {
        $(this).animate(
            {
                left: '150px'
            }, 100)
        $(this).animate(
            {
                left: '-100px'
            }, 150)
        $(this).animate(
            {
                left: '100px'
            }, 100)
        $(this).animate(
            {
                left: '-80px'
            }, 100)
        $(this).animate(
            {
                left: '60px'
            }, 100)
        $(this).animate(
            {
                left: '0px'
            }, 200)
    }); 
    //console.log(Math.ceil(max_num_shakes * Math.random()));
    // Get the number of shakes.
    // Make this animation more random! Math.random()
});


/*
$(document).ready(function(evt) {
    $('#magic_8').click(function() {
        $(this).animate(
            {
                left: '150px'
            }, 100, 
            function() {
                $(this).animate(
                    {
                        left: '-150px'
                    }, 100,
                    function() {
                        $(this).animate(
                            {
                                left: '150px'
                            }, 100,
                            function() {
                                $(this).animate(
                                    {
                                        left: '-150px'
                                    }, 100)
                                $(this).animate(
                                    {
                                        left: '150px'
                                    }, 100)
                                $(this).animate(
                                    {
                                        left: '0px'
                                    }, 100)
                            });
                    });
            });
    });
});
*/
