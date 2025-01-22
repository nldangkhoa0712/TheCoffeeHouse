
function getCrypto() {
    try {
        return window.crypto;
    } catch {
        return crypto;
    }
}

export const hashData = async (value: string) => {
    const crypto = getCrypto()
    const encoder = new TextEncoder()
    const data = encoder.encode(value)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex
}

import crypto from 'crypto';

export const convertToSHA1 = (input: string): string => {
    return crypto.createHash('sha1').update(input).digest('hex');
}