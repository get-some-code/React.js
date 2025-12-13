import { useState } from "react";

function Card({ children, title, color = 'blue' }) {
  const colorClasses = {
    blue: "border-blue-500 bg-gradient-to-br from-blue-500 to-blue-400 text-white",
    green: "border-green-500 bg-gradient-to-br from-green-600 to-green-500 text-white",
    purple: "border-purple-500 bg-gradient-to-br from-purple-500 to-purple-400 text-white",
    red: "border-red-500 bg-gradient-to-br from-red-500 to-red-400 text-white",
  };
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-lg bg-opacity-95 transition-transform duration-300 transform hover:-translate-y-1`}>
      {title && (
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-white/90 opacity-90" />
          {title}
        </h3>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-6 w-full",
    horizontal: "flex flex-row flex-wrap gap-4 w-full",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ComplexProps() {
  const initialUsers = [
    {
      id: 1,
      name: "Jane Foster",
      email: "janef@gmail.com",
      role: "COO",
      avatar:
        "https://cdn.britannica.com/86/255786-050-5A8D7B3A/actress-natalie-portman-attends-christian-dior-haute-couture-paris-fashion-week.jpg",
      followers: 1305,
      following: 180,
      isFollowing: false,
      color: "blue",
    },
    {
      id: 2,
      name: "Steve Rogers",
      email: "steve.rogers@gmail.com",
      role: "CEO",
      avatar: "https://i.cdn.newsbytesapp.com/images/l33020250811140530.jpeg",
      followers: 9658,
      following: 420,
      isFollowing: false,
      color: "purple",
    },
    {
      id: 3,
      name: "Tony Stark",
      email: "tonystark3000@gmail.com",
      role: "CTO",
      avatar: "https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg",
      followers: 2425,
      following: 11,
      isFollowing: false,
      color: "green",
    },
    {
      id: 4,
      name: "Peter Parker",
      email: "pete.parker@gmail.com",
      role: "Jr. Intern",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9ysKp3ztIiYfM38bqE8tkyztOvjbCkXiVQ&s",
      followers: 1520,
      following: 290,
      isFollowing: false,
      color: "red",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [hoveredId, setHoveredId] = useState(null);

  function toggleFollow(id) {
    setUsers(prev =>
      prev.map(u => {
        if (u.id !== id) return u;
        const isFollowing = !u.isFollowing;
        const followers = isFollowing ? u.followers + 1 : Math.max(0, u.followers - 1);
        return { ...u, isFollowing, followers };
      })
    );
  }

  return (
    <section className='p-10 bg-white/80 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-[0_20px_60px_rgba(2,6,23,0.35)] transition-all duration-500 backdrop-blur-sm'>
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Complex props
      </h2>
      <p className="text-gray-800 leading-relaxed mb-8 max-w-6xl mx-auto
              text-lg tracking-wide opacity-100
              bg-linear-to-b from-white to-gray-50 p-8 rounded-2xl
              shadow-inner ring-1 ring-gray-100 text-left
              sm:text-left transition-all duration-400">

        In React, <strong>complex props</strong> refer to props that contain structured data such as objects, arrays, or combinations of multiple values.
        Instead of passing a single value, complex props allow you to send rich data sets to a component, enabling it to render dynamic and data-driven user interfaces.

        <br /><br />

        In this project, the user profile cards demonstrate the use of complex props by passing an entire user object to the Card component.
        Each card receives multiple related values at once, including personal details, profile image, follower statistics, follow state, and styling information.
        This allows the component to remain reusable while still displaying detailed and customized content.

        <br /><br />

        For example, the complex props passed to each Card include:
        <br />
        • <strong className="text-blue-600">user details</strong> such as name, email, and role stored within a single object. <br />
        • a <strong className="text-blue-600">profile image URL</strong> used to render a rounded avatar. <br />
        • <strong className="text-blue-600">followers and following counts</strong> grouped together as related data. <br />
        • a <strong className="text-blue-600">follow state</strong> that controls whether the user is followed or not. <br />
        • a <strong className="text-blue-600">color prop</strong> that dynamically styles each card differently.

        <br /><br />

        When the Follow button is clicked, React updates only the relevant fields inside the complex user object, such as the follower count and follow status.
        The component then re-renders using the updated object, reflecting the changes instantly on the screen.
        This demonstrates how complex props work together with state to manage and update structured data efficiently.

        <br /><br />

        Overall, the Complex Props section shows how passing structured data through props helps build scalable applications,
        keeps related data grouped together, and allows components to handle real-world use cases where multiple values must be managed at once.
      </p>

      <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
        Card Component with Children
      </h3>

      <Container layout="grid">
        {users.map(user => (
          <Card key={user.id} title="User Profile" color={user.color}>
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 space-y-3 text-left">
                <p className="flex items-center gap-4">
                  <strong className="inline-block w-20 text-gray-100">Name:</strong>
                  <span className="text-white"> {user.name}</span>
                </p>
                <p className="flex items-center gap-4">
                  <strong className="inline-block w-20 text-gray-100">Email:</strong>
                  <span className="text-white"> {user.email}</span>
                </p>
                <p className="flex items-center gap-4">
                  <strong className="inline-block w-20 text-gray-100">Role:</strong>
                  <span className="text-white"> {user.role}</span>
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button className="px-4 py-2 rounded-full bg-white/20 text-white font-medium hover:bg-white/30 transition-all duration-200 shadow-sm">
                    Message
                  </button>

                  <button
                    onClick={() => toggleFollow(user.id)}
                    onMouseEnter={() => setHoveredId(user.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={
                      user.isFollowing
                        ? `${hoveredId === user.id ? 'bg-red-500 text-white' : 'bg-white text-blue-600'} px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow`
                        : 'bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:brightness-95 transition-all duration-200 shadow'
                    }
                  >
                    {user.isFollowing ? (hoveredId === user.id ? 'Unfollow' : 'Following') : 'Follow'}
                  </button>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center gap-4">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white/40"
                />
                <div className="flex items-center gap-6 bg-white/10 px-4 py-2 rounded-full shadow-inner">
                  <div className="text-center">
                    <div className="text-sm font-semibold">{user.followers}</div>
                    <div className="text-xs text-white/80">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">{user.following}</div>
                    <div className="text-xs text-white/80">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </section>
  );
}

export default ComplexProps;
