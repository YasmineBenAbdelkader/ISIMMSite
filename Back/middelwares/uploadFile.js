const multer = require ('multer')
const path = require ('path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storages')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    //limits: { fileSize: '1000000'},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|jfif/  
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files format to upload')
    }
})

module.exports = upload