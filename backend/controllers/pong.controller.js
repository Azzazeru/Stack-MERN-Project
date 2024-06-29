export const pong = async (req, res) => {
    res.send({
        pong: new Date().toISOString()
    })
}