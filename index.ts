import {Application} from "https://deno.land/x/oak@v10.5.1/mod.ts"
import router from './routes/index.routes.ts'

const app = new Application();

console.log("Server running")

app.use(router.routes());
app.use(router.alloweMethods());
app.listen({port:8080});

