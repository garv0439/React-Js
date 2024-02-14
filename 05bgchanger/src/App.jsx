import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div>
          <h1 className="text-white"
            style={{ backgroundColor: "black", textAlign: "center", fontStyle: 'italic', fontWeight: 'bold' }}
          >@copyright Garv Kadia</h1>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">

            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "red", border: color === "red" ? '3px solid red' : '3px solid black' }}
            >red</button>
            <button
              onClick={() => { setColor("green"); }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "green", border: color === "green" ? '3px solid red' : '3px solid black' }}
            >green</button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "blue", border: color === "blue" ? '3px solid red' : '3px solid black' }}
            >blue</button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "violet", border: color === "violet" ? '3px solid red' : '3px solid black' }}
            >violet</button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black  shadow-large"
              style={{ backgroundColor: "yellow", border: color === "yellow" ? '3px solid red' : '3px solid black' }}
            >yellow</button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "black", border: color === "black" ? '3px solid red' : '3px solid black' }}
            >black</button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-large"
              style={{ backgroundColor: "grey", border: color === "grey" ? '3px solid red' : '3px solid black' }}
            >grey</button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "olive", border: color === "olive" ? '3px solid red' : '3px solid black' }}
            >olive</button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-large"
              style={{ backgroundColor: "lavender", border: color === "lavender" ? '3px solid red' : '3px solid black' }}
            >lavender</button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-large"
              style={{ backgroundColor: "pink", border: color === "pink" ? '3px solid red' : '3px solid black' }}
            >pink</button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-large"
              style={{ backgroundColor: "white", border: color === "white" ? '3px solid red' : '3px solid black' }}
            >white</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
