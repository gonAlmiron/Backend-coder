import passport from 'passport';
import { Router } from "express";
import path from 'path'

const router = Router();

const passportOptions = { badRequestMessage: 'Falta username / password' };


router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', passportOptions, (err, user, info) => {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);

    res.json({ msg: 'signup OK' });
  })(req, res, next);
});

router.get('/', (req, res) => {
  res.json({
    pid: process.pid,
    msg: 'hola'
  })
})

router.post(
  '/login',
  passport.authenticate('login', passportOptions),
  (req, res) => {
    res.render('datos')
    
  },
);

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.get('/datos', (req, res) => {
  res.render('datos', {
    nombre: req.user
  })
});

router.get('/info', (req, res) => {
  res.render('info')
})


const scriptPath = path.resolve(__dirname, './utils/calculo.js');

router.get('/randoms', (req, res) => {
  const {cantidad} = req.query;
  const computo = fork(scriptPath);
  computo.send(cantidad);
  computo.on('message', (sum) => {
    res.json({
      resultado: sum
    })
  })
  })


export default router;