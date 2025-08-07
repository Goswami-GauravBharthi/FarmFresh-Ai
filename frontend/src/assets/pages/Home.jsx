import React from 'react'

  import toast, { Toaster } from "react-hot-toast";
  const notify = () => toast.success("Here is your toast.");

function Home() {


    return (
      <div>
        <button onClick={notify}>Make me a toast</button>
        
      </div>
    );

  // return (
  //   <div>Home</div>
  // )
}

export default Home