const mockAPI = {
  loginUser: async function () {
    return await Promise.reject({
      "status": 400,
      "message": "password is invalid!"
    })
  },
  signupUser: async function(){
    return await Promise.reject({
      "status": 400,
      "message": "email is already exist"
    })
  },
  getUserProfile: async function(){
    return await Promise.reject({
      "status": 400,
      "message": "string"
    })
  },
  verifyEmail: async function(){
    return await Promise.reject({
      "status": 400,
      "message": "send mail problem"
    })
  },
  resetPassword: async function(){
    return await Promise.reject({
      "status": 400,
      "message": "operation failed"
    })
  }
};

export default mockAPI;

//   loginUser: async function(){
//     return await Promise.resolve("token")
//   },
//   signupUser: async function(){
//     return await Promise.resolve("Account successfully created")
//   },
//   getUserProfile: async function(){
//     return await Promise.resolve({
//       "id": "string",
//       "username": "string",
//       "password": "string",
//       "email": "user@example.com",
//       "phoneNumber": "string",
//       "photo": "string",
//       "createdAt": "2024-04-01T12:15:10.716Z",
//       "updatedAt": "2024-04-01T12:15:10.716Z"
//     })
//   },
//   verifyEmail: async function(){
//     return await Promise.resolve({
//       "status": 200,
//       "message": "operation successful"
//     })
//   },
//   resetPassword: async function(){
//     return await Promise.resolve({
//       "status": 200,
//       "message": "operation successful"
//     })
//   }
// }

// export default mockAPI