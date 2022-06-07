import jwt from "jsonwebtoken"

const verifyIsAdmmiddleware = (req, res, next) => {

    let token = req.headers.authorization

    jwt.verify(token, "SECRET_KEY", (error, decaded) => {
        if(error){
            return res.status(401).json({message: "Invalid Token."})
        } 
        console.log(decaded)

        next()
    })

}
export default verifyIsAdmmiddleware