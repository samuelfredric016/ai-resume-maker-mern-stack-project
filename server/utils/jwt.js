import jwt from 'jsonwebtoken';

/**
 * Generate JWT token, set secure HTTP-only cookie, and send response
 */
export const sendTokenResponse = (user, statusCode, res, message = 'Success') => {
  const secret = process.env.JWT_SECRET || 'dev_secret_key_123456';
  const expire = process.env.JWT_EXPIRE || '7d';

  // Create JWT payload
  const token = jwt.sign(
    { id: user._id, role: user.role },
    secret,
    { expiresIn: expire }
  );

  // Cookie expiration calculation (default 7 days)
  const cookieExpireDays = 7;
  const cookieOptions = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true, // Prevents XSS attacks from reading the cookie
    secure: process.env.NODE_ENV === 'production', // Use secure in production HTTPS
    sameSite: 'lax', // CSRF protection
  };

  // Attach cookie to response and return sanitized user data
  res
    .status(statusCode)
    .cookie('token', token, cookieOptions)
    .json({
      success: true,
      message,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isPremium: user.isPremium,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
    });
};
