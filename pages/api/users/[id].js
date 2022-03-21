import { allUsers } from '.'

export default function handler(req, res) {
  res
    .status(200)
    .json(allUsers.find((user) => user.id === parseInt(req.query.id)))
}
