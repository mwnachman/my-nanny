module.exports = {
  'account': {
    'username': 'Mary'
  },
  'children': [
    {
      'id': 1,
      'name': 'Winston',
      'photo': 'http://photo.jpg',
      'checkedIn': null,
      'curfew': '15:00',
      // Today's chores only
      'chores': [
        {
          'id': 3,
          'title': 'Clean your room',
          'completed': false
        },
        {
          'id': 4,
          'title': 'Wash the dishes',
          'completed': true
        }
      ],
    },
    {
      'id': 2,
      'name': 'Wendy',
      'photo': 'http://photo1.jpg',
      'checkedIn': '16:43',
      'curfew': '17:00',
      'chores': []
    }
  ]
};
