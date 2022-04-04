import { createStore } from 'vuex'

export default createStore({
    state: {
        pasteles: [
            { tipo: 'Boda', precio: '$7500' },
            { tipo: 'Bautizo', precio: '$4000' },
            { tipo: 'Comunion', precio: '$6000' },
            { tipo: 'XV años', precio: '$7000' },
            { tipo: 'Graduacion', precio: '$6500' },
            { tipo: 'Cumpleaños', precio: '$5000' }
        ],
        sabores: [
            { nombre: 'Naranja', cantidad: '30' },
            { nombre: 'Chocolate', cantidad: '78' },
            { nombre: 'Zanahoria', cantidad: '45' },
            { nombre: 'Platano', cantidad: '29' },
            { nombre: 'Manzana', cantidad: '19' },
            { nombre: 'Fresa', cantidad: '41' },
            { nombre: 'Kiwi', cantidad: '37' },
            { nombre: 'Limon', cantidad: '26' }
        ],
        decoraciones: [
            { nombre: 'Chantilly', cantidad: '24' },
            { nombre: 'Ganache', cantidad: '2' },
            { nombre: 'Merengue', cantidad: '45' },
            { nombre: 'Fondant', cantidad: '12' },
            { nombre: 'Royal icing', cantidad: '34' }
        ],
        personas: ['10', '20', '50', '100', '200'],
        pedidos: [
            // {'Nombre','Email','Numero','Direccion','Tipo Pastel','Personas','Sabor','Decoracion'}
            { nombre: 'Juan', email: 'j@j.com', telefono: '5556575859', direccion: "sur 67", pastel: 'Boda', personas: '100', sabor: 'Chocolate', decoracion: 'Fondant' },
            { nombre: 'Maria', email: 'm@m.com', telefono: '5554535251', direccion: 'este 78', pastel: 'XV años', personas: '200', sabor: 'Fresa', decoracion: 'Merengue' }
        ],
        pedido: { nombre: null, email: null, telefono: null, direccion: null, pastel: null, personas: null, sabor: null, decoracion: null }

    },
    getters: {},
    mutations: {
        addPedidoM(state) {
            state.pedidos.push(state.pedido)
        }
    },
    actions: {
        async addPedidoAction(context) {
            context.commit('addPedidoM')
        },
        async addSabor() {
            let asabor = prompt("Ingrese el sabor", "Naranja")
            console.log("El cliente quiere combinar  el sabor con", asabor)
        },
        async addDeco() {
            let adeco = prompt("Ingrese la decoración", "Merengue")
            console.log("El cliente quiere combinar con la decoración ", adeco)
        }
    },
    modules: {}
})