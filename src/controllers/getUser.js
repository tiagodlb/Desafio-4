import prisma from "../database.js";

export async function getUser(req, res) {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id,
        },
    });

    if (!user) {
        return res.sendStatus(404); // Not Found
    }

    res.status(200).json(user);
}
