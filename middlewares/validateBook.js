import Joi from 'joi';

export const validateBook = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    cover: Joi.string().min(3).required(),
    summary: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    publishedYear: Joi.number().integer().required()

  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });
  next();
};
