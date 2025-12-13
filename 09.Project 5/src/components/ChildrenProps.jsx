// Card wrapper component that uses children prop
function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

// Container component that arranges children
function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

export default function ChildrenProps() {
  return (
    <section className='p-10 bg-white/80 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-[0_20px_60px_rgba(2,6,23,0.35)] transition-all duration-500 backdrop-blur-sm'>
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Children Props</h2>
      <p className="text-gray-800 leading-relaxed mb-8 max-w-6xl mx-auto
              text-lg tracking-wide opacity-100
              bg-linear-to-b from-white to-gray-50 p-8 rounded-2xl
              shadow-inner ring-1 ring-gray-100 text-left
              sm:text-left transition-all duration-400">

        The <strong>children</strong> prop in React allows a component to receive JSX elements or other components as its content.
        Instead of defining fixed content inside a component, the parent component can decide what should be rendered inside it.
        This makes components more reusable, flexible, and powerful when building complex layouts.

        <br /><br />

        In this project, the <strong>Card</strong> component demonstrates the use of children props.
        Every card you see on the screen uses the same Card component, but each one displays completely different content
        because the parent passes custom JSX as children. This allows the same card layout to be reused for user profiles,
        statistics panels, action sections, and warning messages.

        <br /><br />

        For example, the children passed to the Card component include:
        <br />
        • <strong className="text-blue-600">User Profile</strong> details such as name, email, and role. <br />
        • <strong className="text-blue-600">Statistics</strong> like total users, active sessions, and revenue. <br />
        • <strong className="text-blue-600">Action buttons</strong> for quick interactions. <br />
        • <strong className="text-blue-600">Warning messages</strong> to highlight important information.

        <br /><br />

        Even though the content inside each card is different, the outer Card structure remains the same.
        This shows how the <strong>children</strong> prop enables component composition, where small reusable components
        are combined to build rich and dynamic user interfaces.

        <br /><br />

        Overall, the Children Props section demonstrates how passing JSX through the children prop helps keep React components
        clean, modular, and scalable while allowing complete control over what is rendered inside them.
      </p>


      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Card Components with Children:
          </h3>
          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name:</strong> John Doe
              </p>
              <p className="mb-2">
                <strong>Email:</strong> john@example.com
              </p>
              <p>
                <strong>Role:</strong> Developer
              </p>
            </Card>

            <Card title="Statistics" color="green">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Users:</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Sessions:</span>
                  <span className="font-bold">567</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue:</span>
                  <span className="font-bold">$89,000</span>
                </div>
              </div>
            </Card>

            <Card title="Quick Actions" color="purple">
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                  Create New
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                  View All
                </button>
              </div>
            </Card>

            <Card title="Warning" color="red">
              <p>
                Your trial period ends in 5 days. Please upgrade your account to
                continue using all features.
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}
