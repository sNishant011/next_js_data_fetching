export const allUsers = [
  {
    id: 1,
    name: 'Nishant Shrestha',
    username: 'sn',
  },
  {
    id: 2,
    name: 'Mahesh Regmi',
    username: 'xD',
  },
]
export default function handler(req, res) {
  res.status(200).json(allUsers)
}
