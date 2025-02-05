import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../../uploads'),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 10 // 10 MB
    }
});

export default upload;  