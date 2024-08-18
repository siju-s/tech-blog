// Format : January 1, 2024
export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC', // Ensures the date is interpreted as UTC
    });
  };