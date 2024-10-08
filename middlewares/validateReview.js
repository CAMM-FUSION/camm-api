import Joi from 'joi';

export const validateReview = (req, res, next) => {
    const schema = Joi.object({
      rating: Joi.string().min(1).required(),
      comment: Joi.string().min(1).required(),
      book: Joi.string().min(2).required()
    });

    const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });
  next();
};