// Simple placeholder images for projects
// You can replace these with actual screenshots or favicons

export const getProjectImage = (projectId: string): string => {
  // For now, we'll use placeholder images
  // Later you can replace these with actual project screenshots

  const placeholders: { [key: string]: string } = {
    'healthy-skin': 'https://via.placeholder.com/400x300/00aaff/ffffff?text=Healthy+Skin',
    'csetenyi-klimaszerveles': 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Klima+Szereles',
    'rozsa-karpitos': 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Karpitos'
  };

  return placeholders[projectId] || 'https://via.placeholder.com/400x300/cccccc/000000?text=Project';
};

// Alternative: Use favicons if available
export const getProjectFavicon = (projectId: string): string => {
  const favicons: { [key: string]: string } = {
    'healthy-skin': 'https://www.healthyskin.hu/favicon.ico', // Replace with actual favicon URL
    'csetenyi-klimaszerveles': 'https://www.csetenyiklimaszerveles.hu/favicon.ico', // Replace with actual favicon URL
    'rozsa-karpitos': 'https://www.rozsakarpitos.hu/favicon.ico' // Replace with actual favicon URL
  };

  return favicons[projectId] || '';
};
