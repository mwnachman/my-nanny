module.exports = {
  'id': 1,
  'name': 'Winston',
  'photo': 'http://photo.jpg',
  'schedule': {
    'id': 15,
    'sunday': 'null',
    'monday': 'null',
    'tuesday': '12:30',
    'wednesday': '14:05',
    'thursday': '18:30',
    'friday': '14:00',
    'saturday': '09:30'
  },
// Today and future chores only
  'chores': [
    {
      'id': 3,
      'title': 'Clean your room',
      'details': 'clean it all',
      'date': '2016-12-01',
      'completed': false
    },
    {
      'id': 4,
      'title': 'Wash the dishes',
      'details': 'wash them all',
      'date': '2016-12-02',
      'completed': true
    }
  ],
};
