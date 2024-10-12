const BASE = 'https://storage-service-production.up.railway.app'

// export async function fetchTodos(state: TodoState = 'all'): Promise<Products[]> {

// https://storage-service-production.up.railway.app/products?limit=5&page=0

export async function getProducts() : Promise<Product[]>{
  const res = await fetch(`${BASE}/products?limit=5&page=0`, {
        'headers': {
            'Authorization': process.env.NEXT_PUBLIC_X_API_KEY! ,
        }
    }
  )
  

//   const res = await fetch(`${BASE}/ping`)
//   console.log(process.env.X_API_KEY)
  return res.json()
}


// export async function toggleTodoStatus(todoId: number, completed: boolean) {
//   const res = await fetch(`${BASE}/${todoId}`, {
//     method: 'PATCH',
//     body: JSON.stringify({ completed }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return res.json()
// }

// export async function createTodo(title: string) {
//   const res = await fetch(BASE, {
//     method: "POST",
//     body: JSON.stringify({ title, completed: false }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return res.json()
// }