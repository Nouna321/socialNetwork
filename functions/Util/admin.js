const admin = require('firebase-admin')
var serviceAccount = {
    type: 'service_account',
    project_id: 'bddsocialnetwork',
    private_key_id: 'a153355a0561c0a2cc32a51d55b5299f6703a45c',
    private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCiyGritg9GC+CP\nENF8rdI5ZnUFtRRywHP1nt8lIRBLh5iKZTeExsxPhQqlGDAEXheBdQ7gPR84HGNH\nm3vAspUWS6N97mjcoO5o8/FHQVzxO30rafBHcrDLJo09R7rP2de9lWKd3CJqu6wV\nGXhSMqS8okcuB+f+ZPvy1IqDihsxSesxmeTSxqjtSrx8I4TCY8y7F//sQ2xxGLYp\n5SYNuIMAfS2CHbiqhi1ck+JXyJVPTzqYRPTTDGv0Vicy+2F0HL45TsiCJi7CTjt2\nw7mzaVKHSW3bBAPwzfBcQ5j1YWEd9XFVjBek8ikkAEJ5srD6cZ+cyAaYHbcrABNH\nyVVIYEgZAgMBAAECggEAM4kpEcqa7k2/U/v6nrL3TfXqkZqBNU1JyRb5xasAmjD9\nMb+WwqIfuANCWf9c4F0bqwAw6/xd4GlYYyjOFrVTLwJWaf2rVEJdCHxGxIzkjHkN\niUuaZzxfzYlQiPinI7vvqhVb6edyPAFbmzh7l+ZxskjcKS4WnDtDat8wVTHJpyIj\nIXTaHdXClHcFNVvMPz0Ma6+bLXFuOtyfb1YesR7JM/7ec06ttpDWnUdmz6/DBSxj\nWtmT94kOTQyycEB8B20e/k14c4FcTSuTfdYMOPbOx++QBJ3DR6J01OhXCZwdXrp9\n25+9pbcwAqjjQ+DUECOCI5cX3LeIDGct1/EWHkzgYwKBgQDNhcEazaEHXd5Je8a7\n4y+yIkMrVOcXr3YLo7st89AL2eZ6h3wk3R2PPnB9jmiP8eqWPsmDWU+jdipuvLkK\nnVp6otwLCCYXCTuSnSWGvP7yAo0NYQVkIUrAPtuBm3ZEscaiZYp65klcvV9fzWW+\nymwt0fJE1E9eKPZoez3BXXEO0wKBgQDKw2grwueNYmstHn4KhF2h6FhHDwWSlfwK\naUX1RdUddekLk+hUq7ZYqhDo7ywhQytZWT4QEeRwt6FHiwHAUD7YH19N5V68S9NQ\nI6J0faYBNXCdTUcCAXkmtWlgBJdnCKujslz8Z1f67JLbmAJZig1y1wD44D87r9sp\nS5r06Pdx4wKBgF2fFm49SaNvcTkMN2WTgkClNu/gRz0U4rM+rJ+sNxOO+VzLpxOr\n3jFIgjnPy3X2/6PdijJZVtvhkkbLlYduUq8WzSIBXkiUHh0VlOih44ke/F4h2jDY\nsZKNj7SkuuVkDlYf50tA6B5k7bNYf4a/8zOUNcaA6H6+LjE+Is2Y4U2dAoGAaT9Y\n+S4oRylI/JiRUCA5Aeu6ttfDSr1zoGvYlmHzJ2Gm4A2cUSb4dbmBIYfUXkehXrWG\nE41WCHQo0RwEgrCkjkZqj+J5dD/fpf95OgJmgsYceGo+a3ocSs1rrx1zAVZs0YGp\n5pI2Btd5u2aCAbw5Et0rcgPkjrTPi/Xkry+mEYUCgYEAm1eRRftl5Aa+KjZSxrpD\nryx9CqP7HuUtHJwX52zLdcaW+km57oWj+uTIoXDbmEd0kYoTVoZoV/I8AIdN4vgE\n3shCeIfQC9crp7UVVi2tUaGwoq2WXPPgKz1Q7Mn6VuNnBprZnCb90JRDlhlNuYyl\n0BMjTbh4PJAFE0iiUaWKpVI=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-cz5tx@bddsocialnetwork.iam.gserviceaccount.com',
    client_id: '107976554047894965351',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cz5tx%40bddsocialnetwork.iam.gserviceaccount.com',
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://bddsocialnetwork.appspot.com',
})

const db = admin.firestore()

module.exports = { admin, db }
