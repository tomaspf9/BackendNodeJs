// se crea la clase productmanage y desde su constructor se cree products como un arreglo vacio
class ProductManager{
    constructor(){
        this.products = []
    }
    static id = 0


    // addproducts agrega a products los productos

    addProduct(tittle,description,price,image,code,stock){
        for(let i = 0; i < this.products.length;i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`)
                break;
            }
        }
        const newProduct ={
            tittle,
            description,
            price,
            image,
            code,
            stock
          
        }
        //En caso de que no falte ninguno agrega

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({...newProduct,id:ProductManager.id,})
        }else{
            console.log("todos los campos son requeridos")
        }
        
    }
    // getProduct devuelve mi array de productos
    getProduct(){
        return this.products
    }
    existe(id){
        return this.products.find((producto) => producto.id === id)
    }
    getProductById(id){
        // Buscamos dentro de nuestro array producto nuestro producto en id
        // En caso de que no esté = NOT FOUND
       !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id))
    }
}

const productos = new ProductManager()
console.log(productos.getProduct())

// Agregar productos metodo addproduct
productos.addProduct('titulo1','descripcion1',1000,'imagen1','abc123',5)
productos.addProduct('titulo2','descripcion2',1000,'imagen2','abc124',6)


console.log(productos.getProduct())



// Validamos el code si está repetido
//productos.addProduct('titulo3','descripcion3',1000,'imagen3','abc124',7)


// Busqueda por ID
//productos.getProductById(2)
