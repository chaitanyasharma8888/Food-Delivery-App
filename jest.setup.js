// Mock TextEncoder/TextDecoder (fix for react-router-dom)
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;