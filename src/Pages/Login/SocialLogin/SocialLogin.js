import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
 
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate=useNavigate();
  let errorElement;
  if (error || error1) {
    errorElement=
      <div>
        <p className="text-danger">Error: {error?.message} {error1?.message} </p>
      </div>
  }

  if(user || user1){
    navigate('/home');
  }


  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2 ">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {
        errorElement
      }
      <div>
        <button onClick={()=> signInWithGoogle()} className="btn btn-primary w-50 mb-2">
          <img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_google_icon_143197.png" alt="" style={{height:'30px',width:'30px',marginRight:'10px'}} />
          Google Sign In
        </button><br/>
        <button className="btn btn-primary w-50 mb-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNCmZ-YtqzJS3OPRAzTtZgCmYFrpSuqdcGfg1hU5Xf2NGbMt1ZKzIYw8JT304RzqmYVY&usqp=CAU" alt="" style={{height:'30px',width:'30px',marginRight:'10px'}} />
          Facebook Sign In
        </button><br/>
        <button onClick={()=> signInWithGithub()} className="btn btn-primary w-50">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS433OEvC_PhX25Eq_Uup9dO1Q0awTgBtNLxqHNfVQ0k_jxYgkNtuEGCJhOkHL4zQSIjUM&usqp=CAU" alt="" style={{height:'30px',width:'30px',marginRight:'10px'}} />
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
