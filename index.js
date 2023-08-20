// let items = [
//     {
//       id: 1,
//       name: "Apple Envy USA",
//       type: "fruit",
//       price: 75000,
//       stock: 10,
//     },
//     {
//       id: 2,
//       name: "Carrot Jakarta",
//       type: "vegetables",
//       price: 50000,
//       stock: 5,
//     },
//     {
//       id: 3,
//       name: "Dragon Fruit",
//       type: "fruit",
//       price: 55000,
//       stock: 7,
//     },
//     {
//       id: 4,
//       name: "Pepaya",
//       type: "fruit",
//       price: 55000,
//       stock: 7,
//     },
//     {
//       id: 5,
//       name: "Melon",
//       type: "fruit",
//       price: 55000,
//       stock: 7,
//     },
//   ];


let items = []

  function getItems() {
    console.log(`items list:`)
    for(let i = 0; i < items.length; i++) {
        id = items[i].id
        name = items[i].name
        type = items[i].type
        price = items[i].price
        stock = items[i].stock
        console.log(`${id} ${name} ${type} ${price} ${stock}`)
    }
  }

  function createItem(name, type, price, stock) {
    let create = false
    let lastIndex = items.length - 1
    let id = items[lastIndex]?.id + 1 || 1 // set id & increment
    let newItem = {
        id,
        name,
        type,
        price,
        stock
    }
    create = true
    items.push(newItem)
    if(create === true) {
        console.log(`item has been created in id:${id}`)
    } else {
        console.log(`item not created`)
    }
    
  }

  createItem("ui", "fruit", 10000, 10);
  createItem("coy", "fruit", 10000, 10);
  createItem("nob", "fruit", 10000, 10);
  createItem("kkko", "fruit", 10000, 10);
  createItem("wowo", "fruit", 10000, 10);
  createItem("lala", "fruit", 10000, 10);
  getItems()
