import { Hono } from 'hono';

const app = new Hono();

app.get('/health', (c) => c.json({ status: 'ok', service: 'user-portal-api', timestamp: new Date().toISOString() }));

app.get('/oauth/v2/authorize', (c) => {
    return c.json({
        message: 'OAuth2/OIDC PKCE Authorization Endpoint',
        supportedGrantTypes: ['authorization_code', 'refresh_token'],
        mfaRequired: true
    });
});

app.get('/api/v1/user/sessions', (c) => {
    return c.json({
        sessions: [
            { id: 'sess_101', device: 'MacBook Pro (macOS Sequoia)', location: 'San Francisco, CA', active: true, lastActive: '2 mins ago' },
            { id: 'sess_102', device: 'iPhone 16 Pro (iOS 18)', location: 'San Francisco, CA', active: false, lastActive: '3 hours ago' }
        ]
    });
});

export default {
    port: 4020,
    fetch: app.fetch
};
