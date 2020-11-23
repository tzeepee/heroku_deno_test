// Importing Module
import {Application, Router} from 'https://deno.land/x/oak/mod.ts';
import * as flags from 'https://deno.land/std/flags/mod.ts';

// Setting up port
const {args, exit} = Deno;
const DEFAULT_PORT = 8000;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
if (isNaN(port)){
    console.log("This is not port number");
    exit(1);
};

// Initializing App and Router
const app = new Application();
const router = new Router();

// Set our router to handle request
router.get('/',(ctx) => {ctx.response.body = 'This is the main page';})
.get('/home',(ctx)=>{ctx.response.body = "This is the home page";})

// Passing router inside our application as middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Setting our app to listen to port
await app.listen({port: port});



