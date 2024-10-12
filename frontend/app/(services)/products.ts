const BASE = 'https://storage-service-production.up.railway.app'

// export async function fetchTodos(state: TodoState = 'all'): Promise<Products[]> {

// https://storage-service-production.up.railway.app/products?limit=5&page=0

// export async function fetchTodos() {

//   const res = await fetch(`${BASE}/${queries}`)

//   if (!res.ok) throw new Error('Failed to fetch todos!')

//   return res.json()
// }

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