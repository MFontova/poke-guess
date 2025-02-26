"use client"

export const TryAgain = () => {
  return (
    <div className="animate-shake">
      <button className="border rounded-tl-md rounded-br-md px-3 py-2 hover:bg-gray-800 transition-all" onClick={() => window.location.reload()} >Try again</button>
    </div>
  )
}