import type { RequestHandler } from 'express';

const maintenanceMode: RequestHandler = (req, res, next) => {
  const isUnderMaintenance = true;

  if (isUnderMaintenance) {
    // return res.status(503).json({
    //   message: 'this site is under maintenance, please try again later',
    // });

    throw new Error('Server is under maintenance', { cause: 503 });
  }
  next();
};

export default maintenanceMode;
