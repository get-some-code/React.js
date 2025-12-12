import React from 'react'
import { useState } from 'react'


function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-2 rounded-xl font-semibold transition-all duration-300
        transform will-change-transform shadow-lg hover:shadow-2xl active:scale-95 tracking-wide
        focus:outline-none focus:ring-4 focus:ring-opacity-30
        ${size === 'small' ? 'text-sm px-3 py-1.5 rounded-md' : ''}
        ${size === 'large' ? 'text-lg px-10 py-3 rounded-2xl' : ''}
        ${color === 'primary' ? 'bg-linear-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white ring-blue-300' : ''}
        ${color === 'secondary' ? 'bg-linear-to-br from-gray-300 to-gray-400 hover:from-gray-350 hover:to-gray-500 text-gray-900 ring-gray-200' : ''}
        ${color === 'danger' ? 'bg-linear-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white ring-red-300' : ''}
        ${color === 'success' ? 'bg-linear-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white ring-green-300' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed grayscale filter' : 'cursor-pointer hover:-translate-y-0.5'}
      `}
    >
      {text}
    </button>
  )
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className='p-10 bg-white/80 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-[0_20px_60px_rgba(2,6,23,0.35)] transition-all duration-500 backdrop-blur-sm'>
      <h2 className='font-extrabold text-4xl text-gray-900 mb-6 tracking-tight text-center'>
        Basic Props
      </h2>

      <p className="text-gray-800 leading-relaxed mb-8 max-w-6xl mx-auto
              text-lg tracking-wide opacity-100
              bg-linear-to-b from-white to-gray-50 p-8 rounded-2xl
              shadow-inner ring-1 ring-gray-100 text-left
              sm:text-left transition-all duration-400">
        Props, short for “properties,” are how React lets a parent component send data to a child component. They make components reusable by allowing you to pass different values each time, so you don’t have to hard-code behavior inside the component. A child can only read the props it receives; it cannot change them. If something must change, the parent updates its state and passes new props down.

        <br /><br />
        In this project the Button component demonstrates props in a simple way. Every visible button is the same component, but each one looks or behaves differently because of the props given to it. For example:
        <br /><br />
        • <strong className="text-blue-600">color</strong> decides the button style (primary, secondary, danger, success).<br />
        • <strong className="text-blue-600">size</strong> makes the button small or large.<br />
        • <strong className="text-blue-600">disabled</strong> turns interaction on or off.<br />
        • <strong className="text-blue-600">onClick</strong> tells the parent what to do when the button is pressed.

        <br /><br />
        When you click any active button, the parent updates the <strong className="text-indigo-600">clickCount</strong> state and the new number appears immediately on screen. This shows how <strong>props</strong> (which control appearance and behaviour) and <strong>state</strong> (which tracks changes) work together to create interactive, reusable components.
      </p>

      <div className="space-y-6">
        <h3 className='font-bold text-xl text-gray-800 text-center mb-4'>Different Colors</h3>
        <div className='flex flex-wrap gap-4 justify-center'>
          <Button text="Primary Button" color="primary" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Secondary Button" color="secondary" disabled={true} onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Danger Button" color="danger" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Success Button" color="success" onClick={() => setClickCount(clickCount + 1)} />
        </div>
      </div>

      <div className="space-y-6 mt-10">
        <h3 className='font-bold text-xl text-gray-800 text-center mb-4'>Different Sizes</h3>
        <div className='flex flex-wrap gap-4 justify-center'>
          <Button text="Primary Button" color="primary" size="small" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Secondary Button" color="secondary" size="large" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Danger Button" color="danger" size="large" disabled={true} onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Success Button" color="success" size="small" onClick={() => setClickCount(clickCount + 1)} />
        </div>
      </div>
      <p className='pt-6 text-xl text-red-600 font-semibold text-center'>
        Click count: <span className="text-red-700">{clickCount}</span>
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => setClickCount(0)}
          className='bg-amber-600 rounded-full px-4 py-2 m-2 text-white hover:bg-amber-700 shadow-md hover:shadow-lg transition-all duration-300 ring-2 ring-amber-200/30'
        >
          Reset
        </button>
      </div>
    </section>
  )
};

export default BasicProps;
