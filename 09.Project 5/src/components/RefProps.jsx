import { useRef, forwardRef } from 'react'

// Input component that accept a ref prop
const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className='mb-6 group'>
      <label className='block text-sm font-semibold text-gray-700 mb-2 tracking-wide group-focus-within:text-blue-600 transition-colors'>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        className={`w-full px-5 py-3 border border-gray-300 rounded-2xl
        bg-white/90 backdrop-blur
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition-all duration-300
        group-hover:shadow-lg
        placeholder:text-gray-400
        hover:border-gray-400
        ${className}`} />
    </div>
  )
})

CustomInput.displayName = "customInput";

function RefProps() {

  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.select();
    inputRef.current?.focus();
  }

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  }

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  const focusSecondInput = () => {
    secondInputRef.current?.select();
    secondInputRef.current?.focus();
  }

  return (
    <section className='p-10 bg-white/80 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-[0_20px_60px_rgba(2,6,23,0.35)] transition-all duration-500 backdrop-blur-sm'>
      <h2 className='text-4xl font-extrabold text-gray-900 mb-6 tracking-wide text-center'>
        Ref Props
      </h2>

      <p className='text-gray-700 leading-relaxed mb-12 text-left max-w-6xl mx-auto
               text-lg tracking-wide opacity-95
               bg-gray-50/90 backdrop-blur p-8 rounded-2xl shadow-inner 
               hover:opacity-100 transition-all duration-500'>

        In React, <strong className="text-blue-600">ref props</strong> allow a parent component to directly access and interact
        with a child component’s <strong className="text-blue-600">DOM element</strong>. Unlike normal props, refs do not
        trigger re-renders and are mainly used for <strong>imperative actions</strong> such as focusing an input, reading
        its value, or manually clearing it.

        <br /><br />

        In this section, the reusable <strong className="text-indigo-600">customInput</strong> component demonstrates how
        refs can be passed down using <strong className="text-indigo-600">forwardRef</strong>. Since function components do
        not receive refs by default, React provides forwardRef to explicitly forward the ref from the parent to a specific
        DOM element inside the child component.

        <br /><br />

        In this example:
        <br />
        • a <strong className="text-blue-600">ref</strong> is attached to the first input to programmatically focus it. <br />
        • the parent reads the <strong className="text-blue-600">input value</strong> directly using the ref. <br />
        • the input can be <strong className="text-blue-600">cleared and re-focused</strong> without using state. <br />
        • a second input demonstrates how <strong className="text-blue-600">multiple refs</strong> can be managed independently.

        <br /><br />

        When the <strong className="text-purple-600">“Focus First Input”</strong> button is clicked, the parent component calls
        the <strong className="text-purple-600">focus()</strong> method on the input’s DOM node using the ref. This shows how
        refs enable <strong>direct control</strong> over elements when declarative state updates are not required.

        <br /><br />

        Overall, the <strong className="text-indigo-700">Ref Props</strong> section demonstrates how
        <strong> refs </strong> and <strong>forwardRef</strong> work together to enable controlled, imperative interactions
        with child components while keeping React’s component structure clean, predictable, and reusable.
      </p>

      <div className='max-w-xl mx-auto bg-white/80 backdrop-blur rounded-3xl p-10
                      shadow-xl border border-gray-100
                      hover:shadow-2xl transition-all duration-500'>
        <h3 className='text-2xl font-bold text-gray-800 mb-8 text-center tracking-wide'>
          Try it out!
        </h3>

        <CustomInput
          ref={inputRef}
          label="First input with ref"
          placeholder="Type something"
        />

        <CustomInput
          ref={secondInputRef}
          label="Second input with ref"
          placeholder="Type something else..."
        />

        <div className='flex flex-wrap justify-center gap-4 mt-8'>
          <button
            onClick={focusInput}
            className='px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold
            shadow-md hover:shadow-xl hover:bg-blue-500
            active:scale-95 transition-all duration-200'>
            Focus First Input
          </button>

          <button
            onClick={focusSecondInput}
            className='px-6 py-2.5 rounded-full bg-indigo-600 text-white font-semibold
            shadow-md hover:shadow-xl hover:bg-indigo-500
            active:scale-95 transition-all duration-200'>
            Focus Second Input
          </button>

          <button
            onClick={getInputValue}
            className='px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold
            shadow-md hover:shadow-xl hover:bg-emerald-500
            active:scale-95 transition-all duration-200'>
            Get First Input Value
          </button>

          <button
            onClick={clearInput}
            className='px-6 py-2.5 rounded-full bg-rose-600 text-white font-semibold
            shadow-md hover:shadow-xl hover:bg-rose-500
            active:scale-95 transition-all duration-200'>
            Clear First Input Value
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12
                bg-amber-50/80 backdrop-blur
                border-l-4 border-amber-400
                rounded-2xl p-8 shadow-inner
                transition-all duration-500">

        <h3 className="text-2xl font-bold text-amber-800 mb-6 tracking-wide">
          When to use refs:
        </h3>

        <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <p>
              <strong className="text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Managing focus
              </strong>
              , text selection, or media playback.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <p>
              <strong className="text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Triggering imperative animations
              </strong>
              that cannot be expressed declaratively.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <p>
              <strong className="text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Integrating with third-party DOM libraries
              </strong>
              that require direct access to DOM nodes.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <p>
              <strong className="text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Accessing DOM measurements
              </strong>
              such as scroll position or element size.
            </p>
          </div>
        </div>

        <div className="mt-6 text-gray-700 text-base opacity-90">
          Refs should be used <strong>sparingly</strong> and only when declarative
          state-based solutions are not suitable. They are ideal for
          <strong className="text-amber-700"> direct DOM interactions </strong>
          where React’s re-render cycle is unnecessary.
        </div>
      </div>

    </section>
  )
}

export default RefProps
