
//const fs = require('fs')
import {promises as fs} from "fs"


// creamos ruta 
class ProductManager{
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title,description,price,thumbnail,code,stock) => {

        ProductManager.id++
        
        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        }
        

        this.products.push(newProduct)
    



        await fs.writeFile(this.patch, JSON.stringify(this.products))


    }

    readProducts = async() =>{
        const respuesta = await fs.readFile(this.patch,"utf-8")
        return JSON.parse(respuesta)
    }


getProducts = async () =>{
        const respuesta2 = await this.readProducts()
        return console.log(respuesta2)
}






getProductsById = async (id) =>{

    const respuesta3 = await this.readProducts()
    
    if(!respuesta3.find (product => product.id === id)){

        console.log("producto no encontrado")
    }else{
        console.log(respuesta3.find (product => product.id === id))
    }




}

    deleteProductsById = async (id) =>{

        const respuesta3 = await this.readProducts()
        const productFilter = respuesta3.filter(products => products.id != id)
    
        await fs.writeFile(this.patch, JSON.stringify(productFilter))

        //console.log("Producto Eliminado")
    
    }
//Se genera un nuevo array donde estan los productos restantes y nuevo producto con el mismo id pero con cambios dentro de key:value

updateProducts = async ({id, ...producto}) =>{
    await this.deleteProductsById(id)

    const productOld = await this.readProducts()
    const productsModify = [{...producto,id}, ...productOld]
    await fs.writeFile(this.patch, JSON.stringify(productsModify))

    
    }
         


}



const productos = new ProductManager()

productos.addProduct('Titulo1','Descripcion1',1000,'Imagen1','abc123',1)
productos.addProduct('Titulo2','Descripcion2',1100,'Imagen2','abc124',2)
productos.addProduct('Titulo3','Descripcion3',1230,'Imagen3','abc125',3)
productos.addProduct('Titulo4','Descripcion4',1530,'Imagen4','abc126',4)
productos.addProduct('Titulo5','Descripcion5',1830,'Imagen5','abc127',5)
productos.addProduct('Titulo6','Descripcion6',2230,'Imagen6','abc128',6)
productos.addProduct('Titulo7','Descripcion7',4230,'Imagen7','abc129',7)
productos.addProduct('Titulo8','Descripcion8',4880,'Imagen8','abc130',8)
productos.addProduct('Titulo9','Descripcion9',6000,'Imagen9','abc131',9)
productos.addProduct('Titulo10','Descripcion10',8640,'Imagen10','abc132',10)

// Consultamos los productos creados


//productos.getProducts()


// Consultamos Productos por Id

//productos.getProductsById(3)


// Borrado por id 

//productos.deleteProductsById(3)

//updatear productos

/*productos.updateProducts({
    title: 'Titulo3',
    description: 'Descripcion3',
    price: 4300,
    thumbnail: 'Imagen3',
    code: 'abc125',
    stock: 7,
    id: 3
 })*/