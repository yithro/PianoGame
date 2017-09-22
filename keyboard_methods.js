var Keyboard = function() {
this.notes = [
  { key: 87, name: 'Do', sound: '100', position: 1, CSS: '#1DO', octave: 1, color : 'white' },
  { key: 83, name: 'Do#', sound: '105', position: 2, CSS: '#1DOD', octave: 1, color : 'black' },
  { key: 88, name: 'Re', sound: '110', position: 3, CSS: '#1RE', octave: 1, color : 'white' },
  { key: 68, name: 'Re#', sound: '115', position: 4, CSS: '#1RED', octave: 1, color : 'black' },
  { key: 67, name: 'Mi', sound: '120', position: 5, CSS: '#1MI', octave: 1, color : 'white' },
  { key: 86, name: 'Fa', sound: '130', position: 6, CSS: '#1FA', octave: 1, color : 'white' },
  { key: 71, name: 'Fa#', sound: '135', position: 7, CSS: '#1FAD', octave: 1, color : 'black' },
  { key: 66, name: 'Sol', sound: '140', position: 8, CSS: '#1SOL', octave: 1, color : 'white' },
  {
    key: 72,
    name: 'Sol#',
    sound: '145',
    position: 9,
    CSS: '#1SOLD',
    octave: 1,
    color : 'black'
  },
  { key: 78, name: 'La', sound: '150', position: 10, CSS: '#1LA', octave: 1, color : 'white' },
  { key: 74, name: 'La#', sound: '155', position: 11, CSS: '#1LAD', octave: 1, color : 'black' },
  { key: 188, name: 'Si', sound: '160', position: 12, CSS: '#1SI', octave: 1, color : 'white' },
  { key: 90, name: 'Do', sound: '200', position: 13, CSS: '#2DO', octave: 2, color : 'white' },
  { key: 51, name: 'Do#', sound: '205', position: 14, CSS: '#2DOD', octave: 2, color : 'black' },
  { key: 69, name: 'Re', sound: '210', position: 15, CSS: '#2RE', octave: 2, color : 'white' },
  { key: 52, name: 'Re#', sound: '215', position: 16, CSS: '#2RED', octave: 2, color : 'black' },
  { key: 82, name: 'Mi', sound: '220', position: 17, CSS: '#2MI', octave: 2, color : 'white' },
  { key: 84, name: 'Fa', sound: '230', position: 18, CSS: '#2FA', octave: 2, color : 'white' },
  { key: 54, name: 'Fa#', sound: '235', position: 19, CSS: '#2FAD', octave: 2, color : 'black' },
  { key: 89, name: 'Sol', sound: '240', position: 20, CSS: '#2SOL', octave: 2, color : 'white' },
  {
    key: 55,
    name: 'Sol#',
    sound: '245',
    position: 21,
    CSS: '#2SOLD',
    octave: 2,
    color : 'black'
  },
  { key: 85, name: 'La', sound: '250', position: 22, CSS: '#2LA', octave: 2, color : 'white' },
  { key: 56, name: 'La#', sound: '255', position: 23, CSS: '#2LAD', octave: 2, color : 'black' },
  { key: 73, name: 'Si', sound: '260', position: 24, CSS: '#2SI', octave: 2, color : 'white' },
  { key: 79, name: 'Do', sound: '300', position: 25, CSS: '#3DO', octave: 2, color : 'white' },
];
this.sequence = [];
this.guess = [];
this.score = 0;
};

Keyboard.prototype.randomNotes = function(nb) {
  this.sequence = _.sampleSize(this.notes,nb);
  console.log(this.sequence);
};

Keyboard.prototype.guess = function() {

};
