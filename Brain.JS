// I need a game start.
// I need an option to select rock, paper, or scissors.
// I need a the comput to choose an option randomly.
// I need to compare those choices and tell the player weather they won or lost.
// I need to loop it.


var rock = 1
var paper = 2
var scissors = 3

$(document).ready(function(){

    function player_choice(){
      var player_choice = 0

        switch (player_choice) {
          case player_choice === 1:
            player_choice === rock

          case player_choice === 2:
            player_choice === paper

          case player_choice === 3:
            player_choice === scissors
        }
    }

    function computer_choice(){
      var computer_choice = Math.random(3);
        
        switch (computer_choice){
            case computer_choice === 1:
                computer_choice === rock

            case computer_choice === 2:
                computer_choice === paper

            case computer_choice === 3:
                computer_choice === scissors
        }
      }
    }

    function compare_choices(){
      switch (player_choice || computer_choice){
        case player_choice === computer_choice:
          console.log('Tie')
        case player_choice === rock || computer_choice === scissors:
          console.log('You Win!')
        case player_choice === paper || computer_choice === rock:
          console.log('You Win')
        case player_choice === scissors || computer_choice === paper:
          console.log('You Win')
      }
    }

    function rock(){
    
        
    }
    $('#rock').on('click', function(){
        
    });

    function paper(){


    }
    $('#paper').on('click', function(){

    });

    function scissors(){

    }
    $('scissors').on('click', function(){

    });
});