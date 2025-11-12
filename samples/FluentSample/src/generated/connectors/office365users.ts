// Auto-generated stub for development when PAC-generated connector files are not present.
// This file intentionally provides multiple shapes to mirror common generator outputs
// (default export, named functions, factory, and executeAsync) so imports in the
// sample app won't fail during build. Replace with PAC-generated connector code
// for real behavior.

import * as mockData from '../../mockData/office365Data';

export async function MyProfile() {
  return { success: true, data: mockData.mockCurrentUser };
}

export async function SearchUser(query: string, pageSize = 50) {
  try {
    const data = mockData.searchUsers(query, pageSize);
    return { success: true, data };
  } catch (err) {
    return { success: false, errorMessage: String(err) };
  }
}

export async function UserPhoto(userId: string) {
  // No real photos in mock data
  return { success: true, data: null };
}

// Provide an executeAsync helper similar to connector clients
export async function executeAsync(operation: string, params?: any) {
  switch (operation) {
    case 'MyProfile':
      return MyProfile();
    case 'SearchUser':
      return SearchUser(params?.query || params || '', params?.pageSize || 50);
    case 'UserPhoto':
      return UserPhoto(params?.userId || params);
    default:
      return { success: false, errorMessage: `Unknown operation: ${operation}` };
  }
}

// Default export (object shape)
const Office365UsersClient = {
  MyProfile,
  SearchUser,
  UserPhoto,
  executeAsync,
};

export default Office365UsersClient;
