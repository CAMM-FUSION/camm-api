import Joi from 'joi';

export const validateBook = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    cover: Joi.string().min(3).required(),
    summary: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    publishedYear: Joi.number().integer().required(),
    language: Joi.string().min(3).required(),
    NumberOfPages: Joi.number().integer().required(),
    genres: Joi.string().required(),
    publisher: Joi.string().min(3).required()

  });

  const schema2 = Joi.object({
    title: Joi.string().min(3),
    cover: Joi.string().min(3),
    summary: Joi.string().min(3),
    author: Joi.string().min(3),
    publishedYear: Joi.number().integer(),
    language: Joi.string().min(3),
    NumberOfPages: Joi.number().integer(),
    genres: Joi.string(),
    publisher: Joi.string().min(3)

  });

  const { error } = schema.validate(req.body);
  schema2.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.details[0].message });
  next();
};
