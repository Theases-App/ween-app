const Notifications = require("../models/notification");
const { Event } = require("../models/event");

exports.getNotificationsForEvent = async (req, res) => {
  try {
    const notifications = await Notifications.findAll({
      include: { model: Event }
    });
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error retrieving notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createNotification = (req, res) => {
  Notifications.create({
    event_idevent: req.body.event_idevent,
    notification: req.body.notification,
    seen: req.body.seen
  })
  .then(() => {
    console.log('Notification created successfully');
    res.status(201).json({ message: 'Notification created successfully' });
  })
  .catch((error) => {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.updateSeenStatus = async (req, res) => {
  try {
    const { idnotification } = req.params;
    const { seen } = req.body; 

    const notification = await Notifications.findOne({ where: { idnotification } });
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    await notification.update({ seen });

    console.log('Notification seen status updated successfully');
    res.status(200).json({ message: 'Notification seen status updated successfully' });
  } catch (error) {
    console.error('Error updating seen status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};