$(document).ready(function() {

keyboard = new Keyboard();

  ion.sound({
      sounds: [
          {name: "100"},
          {name: "105"},
          {name: "115"},
          {name: "120"},
          {name: "110"},
          {name: "130"},
          {name: "135"},
          {name: "140"},
          {name: "145"},
          {name: "150"},
          {name: "155"},
          {name: "160"},
          {name: "200"},
          {name: "205"},
          {name: "215"},
          {name: "220"},
          {name: "210"},
          {name: "230"},
          {name: "235"},
          {name: "240"},
          {name: "245"},
          {name: "250"},
          {name: "255"},
          {name: "260"},
          {name: "300"}
      ],
      path: "Notes_database/",
      preload: true,
      volume: 1.0,
      multiplay: true,
  });

// action upon press of a key on the computer keyboard
  function playSoundAndKeyEffect(e) {
  	var id = e.keyCode;
  	ion.sound.play( _.find(keyboard.notes, {key: id}).sound );
      if (_.find(keyboard.notes, {key: id}).color === 'white') {
          $(_.find(keyboard.notes, {key: id}).CSS).addClass("whiteclicked");
          setTimeout(function(){
          $(_.find(keyboard.notes, {key: id}).CSS).removeClass("whiteclicked");
          } ,200);
        }
      else {
          $(_.find(keyboard.notes, {key: id}).CSS).addClass("blackclicked");
          setTimeout(function(){
          $(_.find(keyboard.notes, {key: id}).CSS).removeClass("blackclicked");
          } ,200);
        }
      }

    $(window).keydown(playSoundAndKeyEffect);

// action upon click on a note
  $('section div').click(function() {
    var id = $(this).attr('id');
    console.log(id);
    ion.sound.play( _.find(keyboard.notes, {CSS: '#'+id}).sound );
    if (_.find(keyboard.notes, {CSS: '#'+id}).color === 'white') {
          $(_.find(keyboard.notes, {CSS: '#'+id}).CSS).addClass("whiteclicked");
          setTimeout(function(){
            $(_.find(keyboard.notes, {CSS: '#'+id}).CSS).removeClass("whiteclicked");
          } ,200);
      }
      else {
          $(_.find(keyboard.notes, {CSS: '#'+id}).CSS).addClass("blackclicked");
          setTimeout(function(){
            $(_.find(keyboard.notes, {CSS: '#'+id}).CSS).removeClass("blackclicked");
          } ,200);
        }
      });

});
