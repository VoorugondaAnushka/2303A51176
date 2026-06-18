# Notification System Design
# Stage 1

## APIs

GET /notifications
POST /notifications
PATCH /notifications/:id/read

## Real Time Notifications

Use WebSockets for real-time delivery.

# Stage 2

## Database

notifications

- id
- studentId
- notificationType
- message
- isRead
- createdAt

Use PostgreSQL.

# Stage 3

## Query Optimization

Query:

SELECT *
FROM notifications
WHERE studentID = ?
AND isRead = false
ORDER BY createdAt DESC;

Index:

CREATE INDEX idx_notifications
ON notifications(studentID,isRead,createdAt DESC);

# Stage 4

## Performance Improvements

- Redis cache
- Pagination
- Read replicas
- CDN for static content

# Stage 5

## Scalability

Use:

- Message Queue (RabbitMQ/Kafka)
- Retry Queue
- Dead Letter Queue
- Worker Services

Email sending and DB writes should be asynchronous.

# Stage 6

## Priority Inbox

Priority:

Placement > Result > Event

Use a Min Heap of size K to maintain top K notifications.

Sort by:

1. Notification Type Priority
2. Timestamp Recency