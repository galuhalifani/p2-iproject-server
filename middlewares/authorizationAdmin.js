function adminAuth (req, res, next) {

    if (req.loggedUser.admin_status == true) {
        next()        
    } else {
        next({ code: 403, message: 'Only Admin is authorized to perform this action' })
    }
}


module.exports = adminAuth 