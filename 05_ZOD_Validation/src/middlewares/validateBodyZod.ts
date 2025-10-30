import type { RequestHandler } from 'express';
import type { ZodObject } from 'zod/v4';
import { z } from 'zod/v4';

const validateBodyZod =
  (zodSchema: ZodObject): RequestHandler =>
  (req, res, next) => {
    const parsed = zodSchema.safeParse(req.body);
    // console.log(parsed?.error?.issues);

    if (!parsed.success) {
      const issues = parsed.error?.issues.map((issue) => ({
        path: issue.path.join(),
        message: issue.message,
      }));

      return res.status(400).json({
        message: 'Validation failed',
        issues,
      });
    }

    req.body = parsed.data;
    next();
  };

export default validateBodyZod;
