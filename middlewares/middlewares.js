const Post = (req, res, next) => {
  if (req.method !== 'POST') {
    next()
  } else {
    if (!req.body.nome || !req.body.idade || !req.body.UF) {
      return res.status(404).json({ message: 'Falta informações no Body da requisição middle' })
    } else {
      next()
    }
  }
}

module.exports = {
  Post
}