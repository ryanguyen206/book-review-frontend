export const handleGetRequest = async (link, options) => {
    const res = await fetch(link, options)
    const data = await res.json()
    return data
}

export const timeAgo = (timestamp) => {
    const current_time = new Date();
    const timestamp_date = new Date(timestamp);
  
    const seconds = Math.floor((current_time - timestamp_date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  }