let items = [
    {
      id: 1,
      name: "Apple Envy USA",
      type: "fruit",
      price: 75000,
      stock: 10,
    },
    {
      id: 2,
      name: "Carrot Jakarta",
      type: "vegetables",
      price: 50000,
      stock: 5,
    },
    {
      id: 3,
      name: "Dragon Fruit",
      type: "fruit",
      price: 55000,
      stock: 7,
    },
    {
      id: 4,
      name: "Pepaya",
      type: "fruit",
      price: 55000,
      stock: 7,
    },
    {
      id: 5,
      name: "Melon",
      type: "fruit",
      price: 55000,
      stock: 7,
    },
  ];
  
  function showItems() {
    console.log("item list: ");
    for (let i = 0; i < items.length; i++) {
      console.log(
        `${items[i].id} ${items[i].name} ${items[i].type} ${items[i].price} ${items[i].stock}`
      );
    }
  }
  
  function addItem(name, type, price, stock) {
    let create = false;
    let lastIndex = items.length - 1;
    let id = items[lastIndex].id + 1;
    let tempObj = {
      id,
      name,
      type,
      price,
      stock,
    };
    create = true
    items.push(tempObj);
    if(create === true) {
      console.log(`item has been created in id: ${id}`)
    }  
  }
  
  function deleteItem(id) {
    let result = [];
    let deleted = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        deleted = true;
      } else {
          result.push(items[i]);
      }
    }
  
    if(deleted === true) {
      console.log(`items id:${id} has been deleted`)
    } else {
      console.log(`items id:${id} has not deleted`)
    }
  //   deleted
  //     ? console.log(`items id:${id} has been deleted`)
  //     : console.log(`items id:${id} has not deleted`);
    items = result;
  }
  
  function updateItem(id, name, type, price, stock) {
    let result = [];
    let updated = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].name = name;
        items[i].type = type;
        items[i].price = price;
        items[i].stock = stock;
        updated = true;
        result.push(items[i]);
      } else {
        result.push(items[i]);
      }
    }
    updated
      ? console.log(`item id:${id} has been updated`)
      : console.log(`item id:${id} is not updated`);
    items = result;
  }
  
  addItem("ui", "fruit", 10000, 10);
  addItem("boy", "fruit", 10000, 10);
  deleteItem(3);
  updateItem(6, "boboboy", "fruit", "20000", 5);
  updateItem(10, "boboboy", "fruit", "20000", 5);
  deleteItem(6)
  deleteItem(8);
  deleteItem(10);
  deleteItem(6)
  deleteItem(7)
  updateItem(5, "boboboy", "fruit", "20000", 5);
  showItems();
  