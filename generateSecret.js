import crypto from 'crypto';

const secret = crypto.randomBytes(64).toString('hex'); // Generates a random 64-byte secret
console.log(`JWT_SECRET=${secret}`);
