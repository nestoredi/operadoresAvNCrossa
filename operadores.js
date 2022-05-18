class Villano{
    constructor(nombre,armas,vidas,peligrosidad){
        this.nombre = nombre
        this.armas = armas
        this.vidas = vidas
        this.peligrosidad = peligrosidad
    }
}
let villanos =[]

let formuVillanos =document.querySelector('#formulario')
let mostrarVillanos = document.querySelector('#idVillanos')
let botMostrarVillanos = document.querySelector('#botonMostrar')


/*if(localStorage.getItem ('villanos')){
    villanos = JSON.parse(localStorage.getItem('villanos'))
}else{
    localStorage.setItem('villanos',JSON.stringify(villanos))
}*/
//utilizo operador ternario para suplir el if
localStorage.getItem ('villanos') ?  villanos = JSON.parse(localStorage.getItem('villanos')) : localStorage.setItem('villanos',JSON.stringify(villanos))

formuVillanos.addEventListener('submit',(e)=>{
    e.preventDefault()
    let datVillano = new FormData(e.target)
    const villano = new Villano(datVillano.get('nombre'),datVillano.get('armas'),datVillano.get('vidas'),datVillano.get('peligrosidad'))
    villanos.push(villano)
    localStorage.setItem('villanos',JSON.stringify(villanos))
    formuVillanos.reset()
})
botMostrarVillanos.addEventListener('click',()=>{
    let villanoGuardado= JSON.parse(localStorage.getItem('villanos'))
    villanoGuardado.forEach(villano =>{
        mostrarVillanos.innerHTML += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${villano.nombre}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Usa :${villano.armas}</h6>
    <p class="card-text">Tiene ${villano.vidas}vidas  y una peligrosidad de: ${villano.peligrosidad}</p>
    
  </div>
</div>
        `
    })
})
