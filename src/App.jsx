import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import OIP from "./assets/OIP.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div class="md:container md:mx-auto">
          <h1 className="text-4xl font-bold underline decoration-sky-500 underline decoration-1 underline-offset-8 tracking-tight 	">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            facere est id deleniti,
          </h1>{" "}
          <span class="text-base underline decoration-pink-500 underline decoration-wavy underline decoration-4 uppercase font-semibold text-blue-600/100  leading-loose md:text-xl ">
            recusandae nostrum nisi ipsa expedita quod qui cum doloremque,
          </span>{" "}
          <h1 className="text-4xl font-bold underline decoration-sky-500 underline-offset-8 capitalize hover:line-clamp-4   ">
            molestiae nulla, quam inventore veritatis quidem illo adipisci!
          </h1>
          <button class="  bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-indigo-500 hover:drop-shadow-xl ">
            Save Changes
          </button>
        </div>

        <p>
          New Yorkers are facing the winter chill Lorem ipsum dolo sit amet
          consectetur adipisicing elit. Dignissimos quibusdam labore ducimus
          distinctio! Tenetur quaerat, facilis fugiat tempora minima quae
          excepturi sint odio! Adipisci repellendus soluta totam quaerat
          corrupti labore!...
        </p>

        <div class="card w-2/4 h-40 divide-y-4 divide-slate-400/25 text-center bg-sky-500/50 bg-origin-padding p-4 border-4 border-dashed bg-no-repeat bg-right-top hover:bg-top brightness-125 ">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quibusdam labore ducimus distinctio! Tenetur quaerat
            </p>
          </div>
          <div>02</div>
          <div>03</div>
        </div>

        <div class="w-60 bg-blue-100 h-90 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quibusdam labore ducimus distinctio! Tenetur quaerat, facilis fugiat
            tempora minima quae excepturi sint odio! Adipisci repellendus soluta
            totam quaerat corrupti labore!
          </p>
        </div>
        <div class="flex justify-center -space-x-14">
          <div class="mix-blend-multiply rounded-full  w-[200px] h-[200px] bg-blue-400 ...">
            bjkggj
          </div>
       
          <div class="mix-blend-multiply rounded-full  w-[200px] h-[200px] bg-pink-400 basis-1/3 ...">
            bjkggj
          </div>
       
        </div>
      </div>
    </>
  );
}

export default App;
