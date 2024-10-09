import Review from "../models/reviewModel.js";


// Add a review
export const addReview = async (req, res) => {
    try {
      const { rating, comment, book } = req.body;
      const newReview = new Review({ rating, comment, book });
      await newReview.save();
      res.status(201).json({ success: true, data: newReview });
    } catch (error) {
      console.error(error); // Log error to check what's going wrong
      res.status(500).json({ success: false, message: 'Failed to add review' });
    }
  };

  // Get all reviews
export const getAllreviews =  async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json({ success: true, data: reviews });
    } catch (error) {
      console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch reviews" });
    }
  };

  // Get review by ID
  export const getReviewsById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ success: false, message: 'Review not found' });
        }
        res.status(200).json({ success: true, data: review });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to fetch review' });
    }
};

  // Update review
  export const updateReview = async (req, res) => {
    try {
        const { rating, comment, book } = req.body;
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            { rating, comment, book },
            { new: true } // Returns the updated document
        );
        if (!updatedReview) {
            return res.status(404).json({ success: false, message: 'Review not found' });
        }
        res.status(200).json({ success: true, data: updatedReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to update review' });
    }
};

  // Delete a review
  export const deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ success: false, message: 'Review not found' });
        }
        res.status(200).json({ success: true, message: 'Review deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to delete review' });
    }
};
