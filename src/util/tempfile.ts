/**
 * Create a temporary unique filename, to avoid collisions.
 */
export const getTempFilename = () => {
  const timestamp = Date.now().toString();
  const randomString = Math.random().toString(36).substring(2);
  return `file-${timestamp}-${randomString}`;
};

/**
 * Create a temporary unique filename based on original file name, to avoid collisions.
 */
export const getTempFilenameBasedOnFile = (file: File) => {
  const fileNameWithoutExtension = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
  const timestamp = Date.now().toString();
  const randomString = Math.random().toString(36).substring(2);
  return `${fileNameWithoutExtension}${timestamp}${randomString}`;
};
