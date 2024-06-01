const { Router } = require('express');

const {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors} = require("../controllers/userControllers")

const router = Router();

router.get('/', (req, res) => {
  res.json("This is the user router");
});

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/authors', getAuthors);
router.get('/:id', getUser);

router.post('/change-avatar', changeAvatar);
router.patch('/edit-user', editUser)



module.exports = router;