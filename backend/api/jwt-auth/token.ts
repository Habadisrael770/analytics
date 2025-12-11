import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  // In a real application, you would validate the username and password
  // and return a real JWT token.
  
  const { username, password } = request.body;

  if (username === 'test' && password === 'test') {
    response.status(200).json({
      token: 'mock-jwt-token-1234567890',
      user_email: 'test@example.com',
      user_nicename: 'testuser',
      user_display_name: 'Test User',
    });
  } else {
    response.status(403).json({
      code: 'jwt_auth_failed',
      message: 'שם משתמש או סיסמה שגויים',
      data: { status: 403 },
    });
  }
}
