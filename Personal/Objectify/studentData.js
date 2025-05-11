const _studentData = {
    name: ["Nemisis", "Stragnof"],
    age: 19
}

console.log(_studentData.name[0])


//Constructor
function _Music(genre, key, composer){
    this.composer = composer
    this.key = key
    this.genre = genre
}

const _elevatorMusic = new _Music("Jean", "C", "contemprary")

_elevatorMusic.year= 1998

console.log(_elevatorMusic.year)
