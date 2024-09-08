import path from 'path'
const __dirname = import.meta.dirname;
import multer from 'multer'

const storagelogo = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, path.join(__dirname, '..', 'uploads/logo'))
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const storageprofile = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, path.join(__dirname, '..', 'uploads/profile'))
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploadlogo = multer({ storage: storagelogo })
const uploadprofile = multer({ storage: storageprofile })

export { uploadlogo, uploadprofile }