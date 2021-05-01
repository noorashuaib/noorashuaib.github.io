$(document).ready(function(){
    $('#typewriteTextt').typewrite({
    continuous: true,
      // blinkingCursor: false,
        actions: [
            {type: 'Welcome to my website!'},
            {delay: 8000},
            {remove: {num: 22, type: 'stepped'}},
            {type: 'Some projects are more direct'},
            {delay: 3000},
            {remove: {num: 29, type: 'stepped'}},
            {type: 'All are projects that I am proud to present!'},
            {delay: 7000},
            {remove: {num: 44, type: 'stepped'}},
            {type: 'With a great class'},
            {delay: 3000},
            {remove: {num: 18, type: 'stepped'}},
            {type: 'Great Professor'},
            {delay: 3000},
            {remove: {num: 15, type: 'stepped'}},
            {type: 'And no'},
            {delay: 1000},
            {remove: {num: 2, type: 'stepped'}},
            {type: 'some stress'},
            {delay: 3000},
            {remove: {num: 15, type: 'stepped'}},
            {type: 'This is a portfolio of my work for Comm Lab Spring 2021!'},
            {delay: 3000},
            {select: {from: 0, to: 56}},
            {delay: 500},
            {remove: {num: 56, type: 'whole'}},
        ]
    });
});
