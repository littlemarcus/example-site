export default function handler(req, res) {
    res.status(200).json({ hello: `world` })
    console.log('node version: ', process.version);
  }