import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { userRouter } from './Users/user.router'
const app = new Hono()

//default routes
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.notFound((c)=>{
    return c.text("Route not found", 404)
})

// custom routes
app.route('/api', userRouter)




const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
