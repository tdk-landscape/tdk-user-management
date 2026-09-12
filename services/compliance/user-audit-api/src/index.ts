import { Hono } from 'hono';

const app = new Hono();

app.get('/health', (c) => c.json({ status: 'ok', service: 'user-audit-api', timestamp: new Date().toISOString() }));

app.get('/api/v1/audit/logs', (c) => {
    return c.json({
        logs: [
            { id: 'evt_901', action: 'ROLE_ASSIGNED', actor: 'alex.rivera@enterprise.com', target: 'usr_02', timestamp: '2026-09-12T10:14:00Z', status: 'SUCCESS' },
            { id: 'evt_902', action: 'MFA_DEVICE_REGISTERED', actor: 'devon.chen@enterprise.com', target: 'usr_02', timestamp: '2026-09-12T11:02:00Z', status: 'SUCCESS' }
        ]
    });
});

export default {
    port: 4030,
    fetch: app.fetch
};
