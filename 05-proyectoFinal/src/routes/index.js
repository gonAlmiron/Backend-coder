import {Router} from 'express';
import passport from 'passport';
import log4js from 'log4js';
import { transporter } from "../services/email.js";
import { templateHtml } from '../services/template.js';
import { twilioClient } from "../services/whatsapp.js";


const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "Fetch desde el SERVIDOR / ROUTER"
    })
})


const passportOptions = { badRequestMessage: 'Falta username / password' };


router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', passportOptions, (err, user, info) => {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);

    

    const logger = log4js.getLogger();

    logger.level = 'info';
  
    logger.info("Ruta /SIGNUP. Metogo POST")

    res.json({ msg: 'signup OK' });
  })(req, res, next);
});

router.post(
    '/login',
    passport.authenticate('login', passportOptions),
    (req, res) => {
  
      const logger = log4js.getLogger();
  
      logger.level = 'info';
    
      logger.info("Ruta /LOGIN. Metogo POST")

      res.json({
        msg: "LOGIN OK!"
      })
  
      
    },
  );


  router.post('/gmail', async(req, res) => {
    const { dest } = req.body;
    const mailOptions = {
        from: process.env.EMAIL,
        to: dest,
        subject: '¡Bienvenido a la comisión 32155!',
        // text: 'Hola, te damos la bienvenida a nuestra comisión de backend.'
        // html: '<h1>Hola, te damos la bienvenida a nuestra comisión de backend.</h1>'
        html: templateHtml,
        attachments: [
            {
                path: process.cwd() + '/src/services/texto.txt',
                filename: 'texto-adjunto-32155'
            }
        ]
    };
    try{
        const response = await transporter.sendMail(mailOptions);
        console.log('Email enviado!');
        res.json(response);
    }catch(error){
        console.log(error);
    }
})


router.post('/whatsapp', async(req, res) => {
  try {
    const message = {
      body: req.body.message,
      from: process.env.CEL,
      to: req.body.dest,
      mediaUrl: ['https://cadenaser.com/resizer/c09Az9WzwQFwSZPN90pP1dhNqQ8=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/TOLWBLP2DRFWZPVWKRWIQ4WH3I.jpg']
    };
    const response = await twilioClient.messages.create(message);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}); 


router.post('/inbox', async (req, res) => {
  try {
    console.log(req.body);
    if(req.body.Body.toUpperCase().includes('HOLA')) {
      await sendMessageToClient(req.body.WaId, `Hola ${req.body.ProfileName}!, ¿Cual es tu consulta?`)
    }
    if(req.body.Body.toUpperCase().includes('CHAU')) {
      await sendMessageToClient(req.body.WaId, `Chau ${req.body.ProfileName}!, ¡Hasta pronto!`)
    }
  } catch (error) {
    console.log(error);
  }
}); 



export default router;