import {Router} from 'express'

const router = Router();

const users = [
    {
        username: 'pepe',
        password : '1234',
        admin: true,
    },
    {
      username: 'juan',
      password : '1234',
      admin: false,
    }
  ]

  router.post('/login', (req, res) => {
    let { username, password } = req.body;

    let credencialesOk = users.filter(
      (usuario) => usuario.username == username && usuario.password == password
    ).length;
    if (credencialesOk) 
      req.session.username = username;
      req.session.contador = 0;
      res.redirect('/datos');
    
  });

  router.get('/', (req, res) => {
    console.log(`SESSION =>${JSON.stringify(req.session)}`);
    if (req.session.username) {
      res.redirect('/datos');
    } else {
      res.render('login');
    }
  });

  router.get('/login', (req, res) => {
    res.render('login')
  });

  router.get('/datos', (req, res) => {
    if (req.session.username) {
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

