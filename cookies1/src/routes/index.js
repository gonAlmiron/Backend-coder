import {Router} from 'express'

const router = Router();

const users = [
    {
        username: 'pepe',
        password : 'BokitaTheBiggest',
        admin: true,
    },
    {
      username: 'juancarlos',
      password : 'BokitaTheBiggest',
      admin: false,
    }
  ]

  router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const index = users.findIndex((aUser) => aUser.username === username && aUser.password === password);
    console.log(index)
    if(index < 0)
      res.status(401).json({ msg: 'no estas autorizado' });
    else {
      const user = users[index];
      req.session.loggedIn = true;
      req.session.contador = 1;
      req.session.admin = user.admin;
      req.session.username = user.username;
      res.redirect('/datos')
  
      res.json({msg: 'Bienvenido!!'})
    }
  });

  router.get('/', (req, res) => {
    console.log(`SESSION =>${JSON.stringify(req.session)}`);
    if (req.session.nombre) {
      res.redirect('/datos');
    } else {
      res.render('login');
    }
  });

  router.get('/login', (req, res) => {
    res.render('login')
  });

  router.get('/datos', (req, res) => {
    if (req.session.nombre) {
      req.session.contador++;
      res.render('datos', {
        datos: usuarios.find((user) => user.username == req.session.username),
        contador: req.session.contador,
      });
    } else {
      res.redirect('/login');
    }
  });
  
  router.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ msg: 'session destruida' });
  });
  


export default router


// router.get('/cookie', (req, res) => {
//     res.cookie('Nombre', 'Gonzalo').send('Nombre creado')
// })

// router.post('/cookie', (req, res) => {
//     let {key, value, signed} = req.body

//     const options = {}
//     if(signed)
//     options.signed = signed


//     try {

//         res.cookie(key, value, options).send('Cookie firmada creada')
//     } catch(err) {
//         res.status(400).json({msg: err})
//     }
// })



// router.get('/leer-cookie', (req, res) => {
//     res.json({
//         cookies: req.cookies,
//         signedCookies: req.signedCookies
//     })
// })

