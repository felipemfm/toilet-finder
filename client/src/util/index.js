export default function typeNormalize(type) {
  if (type === 'publicToilet') {
    return 'Public Toilet';
  }
  if (type === 'convenienceStore') {
    return 'Convenience Store';
  }
  if (type === 'fastFood') {
    return 'Fast Food';
  }
  if (type === 'familyRestaurant') {
    return 'Family Restaurant';
  }
  if (type === 'departmentStore') {
    return 'Department Store';
  }
  if (type === 'lodging') {
    return 'Hotel';
  }
  if (type === 'library') {
    return 'Library';
  }
}
