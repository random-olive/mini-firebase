// const Auth = () => {
//     const onSocialClick = async (event) => {
//       const {    target: { name },  } = event;
//       let provider;
//       if (name === "google") {
//         provider = new firebaseInstance.auth.GoogleAuthProvider();
//       } 
//       await authService.signInWithPopup(provider);
//     };
  
//     return (
//       <div>
//         <AuthForm />
  
//         <div>
//           <button onClick={onSocialClick} name="google">
//             Continue with Google
//           </button>
//           <button onClick={onSocialClick} name="github">
//             Continue with Github
//           </button>
//         </div>
//       </div>
//     );
//   };