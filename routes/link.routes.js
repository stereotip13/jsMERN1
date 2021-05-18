const  {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', async  (req,res) => {
    try {
        const baseUrl = config.get('baseUrl')
        const {from} = req.body


    } catch (e) {
        res
            .status(500)
            .json({ message: 'Что то пошло по пизде, попробуй снова' })
    }
})
router.get('/', auth, async (req,res) => {
    try {
        const links = await Link.find({owner: req.user.userId})
        res.json (links)
    } catch (e) {
        res
            .status(500)
            .json({message: 'Что то пошло по пизде, попробуй снова'})
    }
})

router.get ('/:id', async (req,res) =>{
    try {
        const link = await Link.findById(req.params.id)
        res.json (link)
    } catch (e) {
        res
            .status(500)
            .json({message: 'Что то пошло по пизде, попробуй снова'})
    }
})
module.exports = router
