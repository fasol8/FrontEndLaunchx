document.addEventListener("DOMContentLoaded", () => {
    init()
})

const init = async() => {
    try {
        let random = Math.floor(Math.random() * (898 - 1)) + 1;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
        await data.json().then(pokemon => {
            let newPokemon = {
                img: pokemon.sprites.other.home.front_default,
                name: pokemon.name,
                number: pokemon.id,
                type: pokemon.types.map((type) => type.type.name).join("/"),
                weight: pokemon.weight / 10 + " Kg",
                height: pokemon.height / 10 + " m",
                moves: pokemon.abilities.map((ability) => ability.ability.name).join('<br>'),
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                special_attack: pokemon.stats[3].base_stat,
                special_defense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat,
            }
            setData(newPokemon);
            console.log(pokemon);
        }).catch(err => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

const fetchData = async() => {
    try {

        let pokemon = document.getElementById("pokeName").value;
        pokemon = pokemon.toLowerCase();
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        await data.json().then(pokemon => {
            let newPokemon = {
                img: pokemon.sprites.other.home.front_default,
                name: pokemon.name,
                number: pokemon.id,
                type: pokemon.types.map((type) => type.type.name).join("/"),
                weight: pokemon.weight / 10 + " Kg",
                height: pokemon.height / 10 + " m",
                moves: pokemon.abilities.map((ability) => ability.ability.name).join('<br>'),
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                special_attack: pokemon.stats[3].base_stat,
                special_defense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat,
            }
            setData(newPokemon);
            console.log(pokemon);
        }).catch(err => {
            console.log(err);
            alert("Pokemon not found");
        })
    } catch (error) {
        console.log(error);
    }
}

const setData = (pokemon) => {
    let typ = pokemon.type;
    typ = typ.split("/");
    console.log(typ[0]);
    let number = pokemon.number.toString();
    if (number.length == 1)
        number = "N.º00" + number;
    else if (number.length == 2)
        number = "N.º0" + number;
    else
        number = "N.º" + number;
    document.getElementById("name").innerText = pokemon.name;
    document.getElementById("number").innerText = number;
    document.getElementById("img").src = pokemon.img;
    document.getElementById("type").innerHTML = pokemon.type;
    document.getElementById("abilities").innerHTML = pokemon.moves;
    document.getElementById("weight").innerText = pokemon.weight;
    document.getElementById("height").innerText = pokemon.height;

    document.getElementById("hp").innerHTML = pokemon.hp;
    const progress_hp = document.querySelector('.progress__hp');
    progress_hp.style.width = div2(pokemon.hp) + '%';
    document.getElementById("attack").innerHTML = pokemon.attack;
    const progress_attack = document.querySelector('.progress__attack');
    progress_attack.style.width = div2(pokemon.attack) + '%';
    document.getElementById("defense").innerHTML = pokemon.defense;
    const progress_defense = document.querySelector('.progress__defense');
    progress_defense.style.width = div2(pokemon.defense) + '%';
    document.getElementById("sattack").innerHTML = pokemon.special_attack;
    const progress_sattack = document.querySelector('.progress__sattack');
    progress_sattack.style.width = div2(pokemon.special_attack) + '%';
    document.getElementById("sdefense").innerHTML = pokemon.special_defense;
    const progress_sdefense = document.querySelector('.progress__sdefense');
    progress_sdefense.style.width = div2(pokemon.special_defense) + '%';
    document.getElementById("speed").innerHTML = pokemon.speed;
    const progress_speed = document.querySelector('.progress__speed');
    progress_speed.style.width = div2(pokemon.speed) + '%';

    document.getElementById("body").classList = typ[0]
}

function div2(num) {
    return num / 2;
}