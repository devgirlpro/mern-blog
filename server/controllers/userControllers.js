//=============================REGISTER ANEW USER
//POST : api/users/register
//UNPROTECTED
const registerUser = (req, res) => {
    res.json("Register User")
}

//=============================LOGIN AREGISTERED USER
//POST : api/users/login
//UNPROTECTED
const loginUser = (req, res) => {
    res.json("Login User")
}

//=============================USER PROFILE
//POST : api/users/:id
//PROTECTED
const getUser = (req, res) => {
    res.json("User Profile")
}

//=============================CHANGE USER AVATAR
//POST : api/users/change-avatar
//PROTECTED
const changeAvatar = (req, res) => {
    res.json("change User Avatar")
}

//=============================SDIT USER DETAIL (from profile)
//POST : api/users/edit-user
//PROTECTED
const editUser = (req, res) => {
    res.json("Edit User Detail")
}

//=============================GET AUTHOTS
//POST : api/users/authors
//UNPROTECTED
const getAuthors = (req, res) => {
    res.json("Get all users/authors")
}

module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}