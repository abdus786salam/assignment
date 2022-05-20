
let callAmar = {
    profession : 'Singer',
    liveIn : 'Goa'
}

let callAkbar = {
    profession : 'Chef',
    liveIn : 'Mumbai'
}

let callAnthony = {
    profession : 'Magician',
    liveIn : 'Kashmir'
}

function borrowSkills(){
    console.log(`I am a ${this.profession}`)
}

borrowSkills.call(callAkbar)
borrowSkills.call(callAnthony)