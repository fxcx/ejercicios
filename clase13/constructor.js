class heroe{
    constructor(name, ranking,health, damage, experience){
        this.name = name
        this.ranking = ranking
        this.health = health
        this.damage = damage
        this.experience = experience
        
    }
talk(name){
    console.log(`hola ${name}`)
}

attack(power){
  console.log(`power ${power}`)
  this.experience += 10
}

takeDamage(damage){
    
}

}

const createNewHeroe({ name }) => heroe(name)

const myHero = createNewHeroe ({ name: 'atlas'})
console.log(myHero.name);



