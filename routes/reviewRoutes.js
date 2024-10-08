import express from "express";
import { addReview, deleteReview, getAllreviews, getReviewsById, updateReview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/reviews", addReview);
router.get("/reviews", getAllreviews);
router.get("/reviews/:id", getReviewsById);
router.patch("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

export default router;