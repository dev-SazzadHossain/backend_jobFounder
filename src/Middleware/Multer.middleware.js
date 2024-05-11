import multer from "multer";

const imageUpload =multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

export const imageUploader=multer({storage:imageUpload})