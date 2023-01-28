import express from "express"
import { getFeedPosts, getUserPosts, likePost, setComment} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js" 

const router = express.Router()

router.get("/", verifyToken, getFeedPosts)
router.get("/:userId/posts", verifyToken, getUserPosts)

router.patch("/:id/like", verifyToken, likePost)
router.post("/:id/comment", setComment)

export default router