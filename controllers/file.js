import path from 'path'
const __dirname = import.meta.dirname;
import multer from 'multer' 

const upload = multer({ dest: path.join(__dirname,'..','uploads/') })

async function handlefile(req, res) {
    res.send(' ')
}

export { handlefile }